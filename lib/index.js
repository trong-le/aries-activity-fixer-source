import { Activity, singleS3StreamOutput } from 'aries-data';
import rp from 'request-promise';

/**
 * Activity to run a query on fixer.io.
 */

const baseURI = 'http://api.fixer.io/';

export default class FixerSource extends Activity {
    static props = {
        name: require('../package.json').name, 
        version: require('../package.json').version
    };

	@singleS3StreamOutput('json')
	async onTask(activityTask, config) {
		const exchangeData = await this.getExchangeRateData(config);
		const formattedExchangeData = await this.formatExchangeRates(exchangeData);
		return formattedExchangeData;
	}

	async getExchangeRateData({ base, givenDate, symbols }) {

		// If date is not defined, get latest exchange rate data
		const exchangeRateDate = (typeof givenDate !== 'undefined') ? givenDate : 'latest';
		const options = {
			uri: `${baseURI}${exchangeRateDate}`,
			qs: {
				base,
				symbols
			},
			json: true
		}

		return new rp(options)
			.then((response) => {
				return response;
			})
	}

	// Create array of objects for each rate
	async formatExchangeRates({ base, date, rates }) {
		let exchangeRates = [];
		for (let rate in rates) {
			exchangeRates.push({ exchange_code: rate, rate: rates[rate], timestamp: new Date()  });
		}
		return exchangeRates;
	}
};