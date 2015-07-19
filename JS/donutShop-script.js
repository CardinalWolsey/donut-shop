//declar the Donut Shop constructor
var DonutShop = function (minCustomers, maxCustomers, avgDonuts, shopName) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgDonuts = avgDonuts;
  this.shopName = shopName;
  this.open = 700;
  this.close = 1800;
  this.hoursOpen = (this.close - this.open)/100;
  this.eachHour = [];
  this.totalDonuts = 0;
};

//This part creates a random number in the range of customers the shops get
DonutShop.prototype.customers = function() {
  var randomNumber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  // console.log('The random number for ' + this.shopName + ' is ' + randomNumber);
  return randomNumber;
};

//This part multiplies the generated number by the average donuts per customer to get a range of donuts purchased for a given hour.
DonutShop.prototype.purchasedDonuts = function() {
  var donutRange = Math.floor(this.customers() * this.avgDonuts);
  // console.log('The number of donuts purchased' + this.shopName + ' is ' + donutRange);
  return donutRange;
};

//this part makes a random number of donuts for each store, each hour open
DonutShop.prototype.donutsEachHour = function() {
  var eachHour = this.eachHour;
  for (var i = 0; i < this.hoursOpen; i++) {
    eachHour[i] = this.purchasedDonuts();
  }
  // console.log(this.eachHour + ' should be an aray');
  return eachHour;
};

//this part creates a sum of the donuts and prints the total donuts per day
DonutShop.prototype.totalPerDay = function(){
  this.donutsEachHour();
  for (var i = 0; i < this.eachHour.length; i++) {
    this.totalDonuts += this.eachHour[i];
  }
  console.log(this.eachHour);
  console.log('Total donuts at ' + this.shopName + ' = ' + this.totalDonuts);
  return this.totalDonuts;
};

//Declaring and instantiating shops, and calling functions.
var downtownShop = new DonutShop (8, 43, 4.50, 'Downtown');
downtownShop.totalPerDay();

var capitolHillShop = new DonutShop (4, 37, 2.00, 'Capitol Hill');
capitolHillShop.totalPerDay();

var southLakeUnionShop = new DonutShop (9, 23, 6.33, 'South Lake Union');
southLakeUnionShop.totalPerDay();

var wedgewoodShop = new DonutShop (2, 28, 1.25, 'Wedgewood');
wedgewoodShop.totalPerDay();

var ballardShop = new DonutShop (8, 58, 3.75, 'Ballard');
ballardShop.totalPerDay();

var shops = [];

//**Collect the name, max, min, and average values
var createStoreForm = document.getElementById('addButton');
createStoreForm.addEventListener('click', function() {
  var name = document.getElementById('name').value.toUpperCase();
  var max = parseInt(document.getElementById('minCustomers').value);
  var min = parseInt(document.getElementById('maxCustomers').value);
  var avg = parseInt(document.getElementById('avgDonuts').value);

  var newShop = new DonutShop(min, max, avg, name);
  newShop.donutsEachHour();
  console.log(newShop.eachHour)
  newShop.totalPerDay();
  newShop.render();
}, false);





//**Function to get all the values from the form fields
// function getStoreValues() {
//   document.getElementById.
// }

// //**this renders the whole table
// DonutShop.prototype.renderTable = function(){
//   this.renderHead();
//   this.renderBody();
//   this.renderFoot();
// };

// //**this renders the table head <thead>
// DonutShop.prototype.renderHead = function(){

// };

// //**this renders the body of the table
// DonutShop.prototype.renderBody = function(){

// };

// //**this renders the footer of the table
// DonutShop.prototype.renderFoot = function(){

// };


// //**call the table render function

//Finds the body tag in HTML and creates a table
var body = document.getElementById('tableBody');
var table = document.createElement('table');
table.id = 'Donut_Table';

//creates the header for the table
var createTableHeader = function() {

  var tr = table.insertRow();
  var td = tr.insertCell();
  td.appendChild(document.createTextNode('Hours:'));

  for(var i = 0; i < 12; i++) {
    var td1 = tr.insertCell();
    if(i < 11){
      var time = 7 + i;
      td1.appendChild(document.createTextNode(time));
    } else {
      td1.appendChild(document.createTextNode('Totals'));
    }
  }
  body.appendChild(table);
  td.id = 'tableCell';
  tr.id = 'tableRow';
}


//calls the table header function

createTableHeader();


//Creates a row for a shop that is called
DonutShop.prototype.addShop = function(){

  for (var i = 0; i < 1; i++){
    var tr = table.insertRow();
    tr.id = 'tableRow' + i;
  }

  for (var i = 0; i < 13; i++) {
    var td = tr.insertCell();
    if(i === 0){
      td.appendChild(document.createTextNode(this.shopName));
    } else if (i === 12) {
      td.appendChild(document.createTextNode(this.totalDonuts));
    } else {
      td.appendChild(document.createTextNode(this.eachHour[i - 1]));
    }
    td.id = 'tableCell' + i;
  }
};

//Pulls all the elements together into a render function
DonutShop.prototype.render = function(){
  this.donutsEachHour();
  this.totalPerDay();
  this.addShop();
};

downtownShop.render();
capitolHillShop.render();
southLakeUnionShop.render();
wedgewoodShop.render();
ballardShop.render();
