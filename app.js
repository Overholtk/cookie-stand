//holds the hours of operation
var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

var parentElement = document.getElementById('salesTable');

var CreateStoreObject = function(storeName, minimumCust, maximumCust, salesAvg) {
  this.name = storeName;
  this.minHourlyCustomers = minimumCust;
  this.maxHourlyCustomers = maximumCust;
  this.avgCookies = salesAvg;
  this.totalCookiesSold = 0;
  this.customersPerHour = [];
  this.cookiesEachHour = [];
};

CreateStoreObject.prototype.generateHourlyCustomers = function() {
  for(var i = 0; i < operationHours.length; i++){
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
  }
};

CreateStoreObject.prototype.generateCookieArray = function () {
  for(var i = 0; i < operationHours.length; i++){
    var cookies = Math.ceil(this.customersPerHour[i] * this.avgCookies);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesSold += cookies;
  }
};

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



var seattle = new CreateStoreObject('Seattle', 23, 65, 6.3);
seattle.generateHourlyCustomers();
seattle.generateCookieArray();
var tokyo = new CreateStoreObject('Tokyo', 3, 24, 1.2);
tokyo.generateHourlyCustomers();
tokyo.generateCookieArray();
var dubai = new CreateStoreObject('Dubai', 11, 38, 3.7);
dubai.generateHourlyCustomers();
dubai.generateCookieArray();
var paris = new CreateStoreObject('Paris', 20, 38, 2.3);
paris.generateHourlyCustomers();
paris.generateCookieArray();
var lima = new CreateStoreObject('Lima', 2, 16, 4.6);
lima.generateHourlyCustomers();
lima.generateCookieArray();
generateHeaderRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


var allStores = [ seattle, tokyo, dubai, paris, lima];
var totalAllStores = 0;
var totalCookiesHourStores = [];
function getCookieArrayTotals(){
  for(var i = 0; i < allStores[0].cookiesEachHour.length; i++){
    for(var j = 0; j < allStores.length; j++){
      totalAllStores += allStores[j].cookiesEachHour[i];
    }
    totalCookiesHourStores.push(totalAllStores);
    console.log(totalCookiesHourStores);
    totalAllStores = 0;
  }
}

getCookieArrayTotals();

function renderTotals(){
  var newRow = document.createElement('tr');
  parentElement.appendChild(newRow);
  var newCell1 = document.createElement('th');
  newRow.appendChild(newCell1);
  for(var i = 0; i < (operationHours.length - 1); i++){
    var newCell = document.createElement('th');
    newCell.textContent = totalCookiesHourStores[i];
    newRow.appendChild(newCell);
  }
  var addTotal = document.createElement('th');
  addTotal.textContent = this.totalCookiesSold;
  newRow.appendChild(addTotal);
}

renderTotals();
