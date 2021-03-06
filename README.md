# Aries Integration for [Fixer.io](http://fixer.io)

Fixer.io is a free JSON API for current and historical foreign exchange rates published by the European Central Bank. As of 1 July 2016, the reference rates will be updated at around 16:00 CET.

## Parameters

#### Date
The integration takes a single date (in `YYYY-MM-DD` formatting) from which to pull the data. If not specified, the integration will pull from the most recent date.

#### Base
The integration takes one Currency Code from which to base the exchange rates. If not specified, the integration will return all currencies with the EURO as the base.

#### Symbols
The integration can take an array of specific Currency Codes if not all are desired. If not specified, the integration will return all available currencies.

#### Currency Codes
```javascript
"AUD" : Australian Dollar
"BGN" : Bulgarian Lev
"BRL" : Brazilian Real
"CAD" : Canadian Dollar
"CHF" : Swiss Franc
"CNY" : Chinese Yuan
"CZK" : Czech Republic Koruna
"DKK" : Danisk Krone
"GBP" : Great British Pound
"EUR" : Euro
"HKD" : Hong Kong Dollar
"HRK" : Croatian Kuna
"HUF" : Hungarian Forint
"IDR" : Indoneisan Rupiah
"ILS" : Israeli New Sheqel
"INR" : Indian Rupee
"JPY" : Japanese Yen
"KRW" : South Korean Won
"MXN" : Mexican Peso
"MYR" : Malaysian Ringgit
"NOK" : Norwegian Krone
"NZD" : New Zealand Dollar
"PHP" : Philippine Peso
"PLN" : Polish Zloty
"RON" : Romanian Leu
"RUB" : Russian Ruble
"SEK" : Swedish Krona
"SGD" : Singapore Dollar
"USD" : United States Dollar
"THB" : Thai Baht
"TRY" : Turkish Lira
"ZAR" : South African Rand
```

## Response
Fixer.io sends all responses in JSON formatting. There will be three main response elements, which Astronomer organizes into an array containing objects of four key-value pairs.

#### Base Code
The currency code on which all returned rates are based. By default, this will be the Euro (EUR).

#### Date
The date to which the rates correspond. By default, this will be the most recent date where data is available.

#### Exchange Code
The corresponding currency code corresponding to the exchange rate. By default, all available currencies and their rates will be returned.

#### Rate
The exchange rate of the base currency (`base_code`) to the exchange currency (`exchange_currency`).

#### Raw Output Example
```javascript
{
    "base": "USD",
    "date": "2016-06-15",
    "rates": {
        "AUD": 1.3524,
        "BGN": 1.7416,
        "BRL": 3.4679,
        "CAD": 1.2857,
        "CHF": 0.96322,
        "CNY": 6.581,
        "CZK": 24.108,
        "DKK": 6.6212,
        "GBP": 0.70488,
        "HKD": 7.7615,
        "HRK": 6.7033,
        "HUF": 279.48,
        "IDR": 13367,
        "ILS": 3.8763,
        "INR": 67.112,
        "JPY": 106.22,
        "KRW": 1171.9,
        "MXN": 18.877,
        "MYR": 4.101,
        "NOK": 8.3183,
        "NZD": 1.4224,
        "PHP": 46.333,
        "PLN": 3.9287,
        "RON": 4.039,
        "RUB": 65.663,
        "SEK": 8.3295,
        "SGD": 1.3549,
        "THB": 35.264,
        "TRY": 2.9301,
        "ZAR": 15.228,
        "EUR": 0.89047
    }
}
```

#### Astronomer Formatted Example
```javascript
[
	{
		"base_code": "USD",
		"date": "2016-06-15",
		"exchange_code": "AUD",
		"rate": 1.3524
	},
	{
		"base_code": "USD",
		"date": "2016-06-15",
		"exchange_code": "BGN",
		"rate": 1.7416
	},
	{
		"base_code": "USD",
		"date": "2016-06-15",
		"exchange_code": "BRL",
		"rate": 3.4679
	},
	{
		"base_code": "USD",
		"date": "2016-06-15",
		"exchange_code": "CAD",
		"rate": 1.2857
	},
	{
		"base_code": "USD",
		"date": "2016-06-15",
		"exchange_code": "CHF",
		"rate": 0.96322
	},
	...
]
```

##TO DO
- [ ] Enable time range filter to pull in historical date.

