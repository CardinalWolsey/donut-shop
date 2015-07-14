// This script will imput values into a table to represent a model of the performance of a chain of donut shops

//create random values for the store
var DonutStore = function(locationName, options) {
  this.locationName = locationName;
  if (!(options.minCustomers && options.maxCustomers && options.averagePerCustomer)) {
    throw "Donut Shops need both a min customers, max customers, and average per customer";
  }

  this.minCustomers = options.minCustomers;
  this.maxCustomers = options.maxCustomers;
  this.averagePerCustomer = options.averagePerCustomer;
  this.opens = options.opens || 700;
  this.closes = options.closes || 1800;
  this.hoursOpen = (this.closes - this.opens)/100;
};

DonutStore.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

DonutStore.prototype.donutsPerHour = function() {
  return Math.floor(this.generateRandom() * this.averagePerCustomer);
};

DonutStore.prototype.donutsPerDay = function() {
  var total = 0;
  for (var i = 0; i < this.hoursOpen; i++) {
    total += this.donutsPerHour();
  };
  return total;
};


//writes the data to the table
// Store.prototype.render = function() {
//   var addEntry = document.createElement(){

//   }
// }




// //create StoreHours constructor
// var StoreHours = function(open, close) {
//   this.open = open;
//   this.close = close;
// };

// StoreHours.prototype.dayHours = function() {
//   for (var i = 0; i < 24; i++) {
//     console.log(i + 1);
//     return (i + 1);
//   }
// };

//determines if the store is open
// StoreHours.prototype.openBool = function () {
//   if (dayHours > this.open && dayHours < this.close) {
//     console.log('the bool value is true');
//     return true;
//   } else {
//     console.log('the bool value is false');
//     return false;
//   }
// };





//declars all the instances of store open-ness and store data generation
// var downtownStoreHours = new StoreHours(7, 18);
// var capitolHillStoreHours = new StoreHours(7, 18);
// var southLakeUnionStoreHours = new StoreHours(7, 18);
// var wedgewoodStoreHours = new StoreHours(7, 18);
// var ballardStoreHours = new StoreHours(7, 18);

var downtownStore = new DonutStore('downtown', {minCustomers: 8, maxCustomers: 43, averagePerCustomer: 4.50});
console.log(downtownStore.donutsPerHour());
console.log(downtownStore.donutsPerDay());

var capitolHillStore = new DonutStore('capitol hill', {minCustomers: 4, maxCustomers: 37, averagePerCustomer: 2.00});
console.log(capitolHillStore.donutsPerHour());
console.log(capitolHillStore.donutsPerDay());

var southLakeUnionStore = new DonutStore('south lake union', {minCustomers: 9, maxCustomers: 23, averagePerCustomer: 6.33});
console.log(southLakeUnionStore.donutsPerHour());
console.log(southLakeUnionStore.donutsPerDay());

var wedgewoodStore = new DonutStore('wedgewood', {minCustomers: 2, maxCustomers: 28, averagePerCustomer: 1.25});
console.log(wedgewoodStore.donutsPerHour());
console.log(wedgewoodStore.donutsPerDay());

var ballardStore = new DonutStore('ballard', {minCustomers: 8, maxCustomers: 58, averagePerCustomer: 3.75});
console.log(ballardStore.donutsPerHour());
console.log(ballardStore.donutsPerDay());


//write to tableHeadings
DonutStore.prototype.renderHeadings = function(){
  var addHeading = document.createElement('th');

}




Tweet.prototype.render = function(){ // ***** This is another way to list methods ... in prototypal inheritance.
  var addTweet = document.createElement('p');
  addTweet.innerHTML = "<b>" + this.userName + "</b>" + ": " + "<i>" + this.text + "</i>?";
  return addTweet;
      };

var main = document.getElementById('content');

var tweet1 = new Tweet('Otis', 'Shama-lama-ding-dong')
// will render as "Otis: Shama-lama-ding-dong"
main.appendChild(tweet1.render());

var tweet2 = new Tweet('Otis', 'We\'re going to need a bigger boat');
main.appendChild(tweet2.render());

//'content' is the id tag on a <section> element


//write to storeReport

//write to tableFoot
