import test from 'blue-tape';
import FixerSource from '../lib/index.js';
import config from './test.config';

// example - make sure configuration is the same
test('proper configuration', t => {
	const activity = new FixerSource();
	t.equal(FixerSource.props.name, require('../package.json').name);
	t.equal(FixerSource.props.version, require('../package.json').version);
	t.end();
});

test('test getExchangeRateData method', async (t) => {
	const source = new FixerSource();
	const data = await source.getExchangeRateData(config);
});