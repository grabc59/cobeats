'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../src/server/db/knex')

const should = chai.should();

chai.use(chaiHttp);

describe('TESTING test skeleton', () => {
  // TEST SKELETON
});
