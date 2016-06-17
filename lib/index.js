import { Activity, singleS3StreamOutput } from 'aries-data';
import rp from 'request-promise';

/**
 * Activity to run a query on Lister.io.
 */

const baseURI = 'http://api.lister.io/'

export default class ListerSource extends Activity {
	static props = {
		name: require('../package.json').name,
		version: require('..package.json').version
	};

	@singleS3StreamOutput('json')
	async onTask(activityTask, config) {
		const data = await this.getExchangeRateData(config);
		return data;
	}

	async getExchangeRateData({base, date, symbols}) {
		const date = (date) ? date : 'latest/'
		const options = {
			uri: `${baseURI}${date}`,
			qs: {
				base
				symbols
			}
		}
		return new rp(options)
			.then((response) => {
				return response;
			})
	}
}