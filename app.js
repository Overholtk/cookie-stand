// Global Variables:

// Holds store hours
var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
// Parent element for each row of the table
var parentElement = document.getElementById('salesTable');
// Tracks cookies sold by all stores per hour
var totalAllStores = 0;
// Holds totalAllStores for every hour the stores are open
var totalCookiesHourStores = [];
// Tracks cookie totals for every store at every hour
var totalCookiesTotalStores = 0;
// Array of data for use in constructor function
// var formData = [];

//Stores all objects:
var allStores = [];
// Constructor Function: constructs an object for each store
var CreateStoreObject = function(storeName, minimumCust, maximumCust, salesAvg) {
  this.name = storeName;
  this.minHourlyCustomers = minimumCust;
  this.maxHourlyCustomers = maximumCust;
  this.avgCookies = salesAvg;
  this.totalCookiesSold = 0;
  this.customersPerHour = [];
  this.cookiesEachHour = [];

  allStores.push(this);
};

// Object creation
var seattle = new CreateStoreObject('Seattle', 23, 65, 6.3);
var tokyo = new CreateStoreObject('Tokyo', 3, 24, 1.2);
var dubai = new CreateStoreObject('Dubai', 11, 38, 3.7);
var paris = new CreateStoreObject('Paris', 20, 38, 2.3);
var lima = new CreateStoreObject('Lima', 2, 16, 4.6);


// Prototypes:

// Determines a random amount of customers per hour
CreateStoreObject.prototype.generateHourlyCustomers = function() {
  for(var i = 0; i < operationHours.length; i++){
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
  }
};

// Calculates cookies sold based on amount of customers
CreateStoreObject.prototype.generateCookieArray = function () {
  for(var i = 0; i < operationHours.length; i++){
    var cookies = Math.ceil(this.customersPerHour[i] * this.avgCookies);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesSold += cookies;
  }
};

// Helps build the table:
CreateStoreObject.prototype.render = function(){
  var newRow = document.createElement('tr');
  parentElement.appendChild(newRow);
  var titleColumn = document.createElement('th');
  titleColumn.textContent = this.name;
  newRow.appendChild(titleColumn);
  for(var i = 0; i < (operationHours.length - 1); i++){
    var newCell = document.createElement('th');
    newCell.textContent = this.cookiesEachHour[i];
    newRow.appendChild(newCell);
  }
  var addTotal = document.createElement('th');
  addTotal.textContent = this.totalCookiesSold;
  newRow.appendChild(addTotal);
};

// Functions:
// Calls the prototypes needed to get data on each object
function generateData() {
  for(var i = 0; i < allStores.length; i++){
    allStores[i].generateHourlyCustomers();
    allStores[i].generateCookieArray();
  }
}

// Determines the amount of cookies sold per hour for all stores and stores it
function getCookieArrayTotals(){
  // Gets cookies per hour for every store and adds them together, then moves to the next hour
  totalCookiesHourStores = [];
  totalAllStores = 0;
  totalCookiesTotalStores = 0;
  for(var i = 0; i < operationHours.length; i++){
    for(var j = 0; j < allStores.length; j++){
      totalAllStores += allStores[j].cookiesEachHour[i];
      totalCookiesTotalStores += allStores[j].cookiesEachHour[i];
    }
    totalCookiesHourStores.push(totalAllStores);
    totalAllStores = 0;
  }
}

// Generates the first row of the table
function generateHeaderRow() {
  var newRow = document.createElement('tr');
  parentElement.appendChild(newRow);
  var emptyRow = document.createElement('th');
  newRow.appendChild(emptyRow);
  for(var i = 0; i < operationHours.length; i++){
    var newCell = document.createElement('th');
    newCell.textContent = operationHours[i];
    newRow.appendChild(newCell);
  }
}

function callAllStores() {
  for(var i =0; i < allStores.length; i++){
    allStores[i].render();
  }
}

// Renders the final row of the table with the hourly totals for all stores
function renderTotals(){
  var newRow = document.createElement('tr');
  parentElement.appendChild(newRow);
  var newCell1 = document.createElement('th');
  newCell1.textContent = ('Totals');
  newRow.appendChild(newCell1);
  for(var i = 0; i < (operationHours.length - 1); i++){
    var newCell = document.createElement('th');
    newCell.textContent = totalCookiesHourStores[i];
    newRow.appendChild(newCell);
  }
  var addTotal = document.createElement('th');
  addTotal.textContent = totalCookiesTotalStores;
  newRow.appendChild(addTotal);
}

var formElement = document.getElementById('newStoreForm');
function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.storeName.value;
  var minHourlyCustomers = parseInt(event.target.minCustomers.value);
  var maxHourlyCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookies = parseInt(event.target.averagePurchAmt.value);
  var newStore = new CreateStoreObject(name, minHourlyCustomers, maxHourlyCustomers, avgCookies);
  newStore.generateHourlyCustomers();
  newStore.generateCookieArray();
  parentElement.innerHTML = '';
  generateHeaderRow();
  callAllStores();
  getCookieArrayTotals();
  renderTotals();
}

formElement.addEventListener('submit', handleSubmit);

// Function Calls:
generateData();
generateHeaderRow();
callAllStores();
getCookieArrayTotals();
renderTotals();



