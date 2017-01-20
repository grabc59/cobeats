'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../src/server/db/knex');

const should = chai.should();

chai.use(chaiHttp);

describe('API routes', () => {

  describe('GET /admin/users', () => {
    it('should return all users', (done) => {
      chai.request(server)
      .get('/admin/users')
      .end((err, res) => {
        res.should.have.status(200);
      });
    });
  });

});
