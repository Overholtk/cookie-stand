var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Seattle = {
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookies: 6.3,
    getCookiesHour: function(min,max) {
        cookiesSoldSeattle = [];
        for(var i = 0; i < 13; i++){
            var custAmt = Math.floor(Math.random() * (max - min + 1) + min);
            cookiesSoldSeattle[i] = Math.ceil(custAmt * this.avgCookies);

        }
        return cookiesSoldSeattle;
    },
    
}

var Tokyo = {
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookies: 1.2,
    getCookiesHour: function(min,max) {
        cookiesSoldTokyo = [];
        for(var i = 0; i < 13; i++){
            var custAmt = Math.floor(Math.random() * (max - min + 1) + min);
            cookiesSoldTokyo[i] = Math.ceil(custAmt * this.avgCookies);

        }
        return cookiesSoldTokyo;
    },
    
}

var Dubai = {
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookies: 3.7,
    getCookiesHour: function(min,max) {
        cookiesSoldDubai = [];
        for(var i = 0; i < 13; i++){
            var custAmt = Math.floor(Math.random() * (max - min + 1) + min);
            cookiesSoldDubai[i] = Math.ceil(custAmt * this.avgCookies);

        }
        return cookiesSoldDubai;
    },
    
}

var Paris = {
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookies: 2.3,
    getCookiesHour: function(min,max) {
        cookiesSoldParis = [];
        for(var i = 0; i < 13; i++){
            var custAmt = Math.floor(Math.random() * (max - min + 1) + min);
            cookiesSoldParis[i] = Math.ceil(custAmt * this.avgCookies);

        }
        return cookiesSoldParis;
    },
    
}

var Lima = {
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookies: 4.6,
    getCookiesHour: function(min,max) {
        cookiesSoldLima = [];
        for(var i = 0; i < 13; i++){
            var custAmt = Math.floor(Math.random() * (max - min + 1) + min);
            cookiesSoldLima[i] = Math.ceil(custAmt * this.avgCookies);

        }
        return cookiesSoldLima;
    },
}

function printSeattle() {
    var hSeattle = document.createElement('h2');
    hSeattle.textContent = 'Seattle:';
    document.getElementById('sectionSeattle').appendChild(hSeattle);
    var cookiesListS = document.createElement('ul');
    for(var i = 0; i < 13; i++){
        var li = document.createElement('li');
        li.textContent = operationHours[i] + ': ' + Seattle.getCookiesHour(Seattle.minHourlyCustomers, Seattle.maxHourlyCustomers)[i];
        cookiesListS.appendChild(li);
    }
    document.getElementById('sectionSeattle').appendChild(cookiesListS);
}

function printTokyo() {
    var hTokyo = document.createElement('h2');
    hTokyo.textContent = 'Tokyo:';
    document.getElementById('sectionTokyo').appendChild(hTokyo);
    var cookiesListT = document.createElement('ul');
    for(var i = 0; i <13; i++){
        var li = document.createElement('li');
        li.textContent = operationHours[i] + ': ' + Tokyo.getCookiesHour(Tokyo.minHourlyCustomers, Tokyo.maxHourlyCustomers)[i];
        cookiesListT.appendChild(li);
    }
    document.getElementById('sectionTokyo').appendChild(cookiesListT);
}

function printDubai() {
    var hDubai = document.createElement('h2');
    hDubai.textContent = 'Dubai:';
    document.getElementById('sectionDubai').appendChild(hDubai);
    var cookiesListD = document.createElement('ul');
    for(var i = 0; i <13; i++){
        var li = document.createElement('li');
        li.textContent = operationHours[i] + ': ' + Dubai.getCookiesHour(Dubai.minHourlyCustomers, Dubai.maxHourlyCustomers)[i];
        cookiesListD.appendChild(li);
    }
    document.getElementById('sectionDubai').appendChild(cookiesListD);
}


printSeattle();
printTokyo();
printDubai();

