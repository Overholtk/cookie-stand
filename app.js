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
            cookiesSold[i] = Math.ceil(custAmt * this.avgCookies);

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