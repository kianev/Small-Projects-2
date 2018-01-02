const express = require('express');
const port = 5000;

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Pesho', lastName: 'Peshev'},
    {id: 2, firstName: 'John', lastName: 'Smith'},
    {id: 3, firstName: 'Gosho', lastName: 'Goshev'}
  ]

  res.json(customers);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
