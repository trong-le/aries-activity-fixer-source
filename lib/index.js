import { Activity, singleS3StreamOutput } from 'aries-data';
import requestPromise from 'request-promise';

/**
 * Activity to run a query on Lister.io.
 */

 const baseURI = 'http://api.lister.io'

 export default class ListerSource extends Activity {
	static props = {
		name: require('../package.json').name,
		version: require('..package.json').version
	};

	@singleS3StreamOutput('json')
	async onTask(activityTask, config) {
		let data = null;
		data = await this.getExchangeRateData(config);
		return data;
	}

	async getExchangeRateData({base, date, symbols}) {
		const options = {

		}
	}
 }