const express = require('express');
const lodash = require('lodash');
const axios = require('axios');
const minimist = require('minimist');
const serialize = require('serialize-javascript');

const app = express();
const port = 3000;

// Parse CLI args using vulnerable minimist
const argv = minimist(process.argv.slice(2));
console.log('CLI Arguments parsed with minimist:', argv);

app.get('/', async (req, res) => {
    // lodash prototype pollution vulnerability demo logic
    const payload = JSON.parse('{"__proto__": {"vulnerable": true}}');
    const obj = {};
    lodash.merge(obj, payload);

    // axios SSRF vulnerability demo logic
    const url = req.query.url || 'https://api.github.com';
    try {
        const response = await axios.get(url, { headers: { 'User-Agent': 'vulnerable-app' } });
        res.send({
            message: "Hello World!",
            lodashPollution: {}.vulnerable ? "Vulnerable!" : "Safe (but library is vulnerable)",
            serialized: serialize({ foo: 'bar' }),
            data: response.data
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Vulnerable app listening at http://localhost:${port}`);
});
