const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

test('GET /api/health returns ok status', async () => {
  const response = await fetch('http://localhost:5000/api/health');

  assert.equal(response.status, 200);

  const body = await response.json();
  assert.equal(body.status, 'ok');
});

module.exports = app;
