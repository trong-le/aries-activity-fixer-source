# Aries Integration for [Fixer.io](http://fixer.io)

Fixer.io is a free JSON API for current and historical foreign exchange rates published by the European Central Bank.

## Parameters

```javascript

```

## Response
Fixer.io sends all responses in JSON formatting. There will be three main response elements.

### Base
The currency on which the rates are based. By default, this will be the Euro (EUR).

### Date
The date to which the rates correspond. By default, this will be the most recent date where data is available.

### Rates
The alternative currencies and their respective rates as key-value pairs. By default, all available currencies and their rates will be returned.

###Example
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