//holds the hours of operation
var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

var parentElement = document.getElementById('salesTable');

var createStoreObject = function(storeName, minimumCust, maximumCust, salesAvg) {
    this.name = storeName;
    this.minHourlyCustomers = minimumCust;
    this.maxHourlyCustomers = maximumCust;
    this.avgCookies = salesAvg;
    this.totalCookiesSold = 0;
    this.customersPerHour = [];
    this.cookiesEachHour = [];
}

createStoreObject.prototype.generateHourlyCustomers = function() {
    for(var i = 0; i < operationHours.length; i++){
        this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
    }
}

createStoreObject.prototype.generateCookieArray = function () {
    for(var i = 0; i < operationHours.length; i++){
        var cookies = Math.ceil(this.customersPerHour[i] * this.avgCookies);
        this.cookiesEachHour.push(cookies);
        this.totalCookiesSold += cookies;
    }
}

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

createStoreObject.prototype.render = function(){
    var newRow = document.createElement('tr');
    parentElement.appendChild(newRow);
    var titleColumn = document.createElement('th');
    titleColumn.textContent = this.name;
    newRow.appendChild(titleColumn);
    for(var i = 0; i < operationHours.length; i++){
        var newCell = document.createElement('th');
        newCell.textContent = this.cookiesEachHour[i];
        newRow.appendChild(newCell);
    }
}

var seattle = new createStoreObject('Seattle', 23, 65, 6.3)
seattle.generateHourlyCustomers();
seattle.generateCookieArray();
var tokyo = new createStoreObject('Tokyo', 3, 24, 1.2);
tokyo.generateHourlyCustomers();
tokyo.generateCookieArray();
var dubai = new createStoreObject('Dubai', 11, 38, 3.7);
dubai.generateHourlyCustomers();
dubai.generateCookieArray();
var paris = new createStoreObject('Paris', 20, 38, 2.3);
paris.generateHourlyCustomers();
paris.generateCookieArray();
var lima = new createStoreObject('Lima', 2, 16, 4.6);
lima.generateHourlyCustomers();
lima.generateCookieArray();
generateHeaderRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();