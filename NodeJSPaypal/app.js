const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox',
  'client_id': 'AaycOfoaoKDwZgMKcK2pMeVgNBWlpsymUxtrQxV_ikkG7zXK2Hzxu3Yg7yL6OWmFqzKGR2M7c59eTNLN',
  'client_secret': 'EDfsKvjUn_R-9z6LDBUKIfISB0g6Y03Ia6wEhRUJ3TnQtYJijOGU8mJ-CcuTDY_MR2d0ofj8n6sJ6USN'
});

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.post('/pay', (req, res) => {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "Windows 10 Enterprise Edition",
          "sku": "001",
          "price": "100.00",
          "currency": "EUR",
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "EUR",
        "total": "100.00"
      },
      "description": "Windows 10 Enterprise Edition"
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for(let i = 0;i < payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
    }
  });

});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
      "amount": {
        "currency": "EUR",
        "total": "100.00"
      }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(JSON.stringify(payment));
      res.send('Success');
    }
  });

});

app.get('/cancel', (req, res) => {
  res.send('Canceled');
});

app.listen(3000, () => {
  console.log('Server started');
});
