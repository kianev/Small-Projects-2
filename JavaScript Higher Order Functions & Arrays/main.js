
const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for (let i = 0; i < companies.length; i++) {
  //console.log(companies[i]);
}

//forEach
companies.forEach(function (company, index) {
    //console.log(index, company.name);
});

//filter
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
 }

 const canDrinkFiltered = ages.filter(function (age) {
   if(age >= 21) {
     return true;
   }
 });

const canDrinkES6 = ages.filter(age => age >= 21);
// console.log(canDrinkES6);

const retailCompanies = companies.filter(company => company.category === 'Retail');
//console.log(retailCompanies);

const companies80es = companies.filter(company => company.start >= 1980 && company.start < 1990);
//console.log(companies80es);

const companiesTenYears = companies.filter(company => (company.end - company.start) >= 10);
//console.log(companiesTenYears);

//map creates new array
const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
//console.log(companyNames);

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

//console.log(ageMap);

//sort
const sortedCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
//console.log(sortedCompany);
const sortAges = ages.sort((a,b) => a - b);
//console.log(sortAges);

//reduce
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => total + age, 0);
//console.log(ageSum);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
//console.log(totalYears);

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a,b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined);