'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../src/server/db/knex');

const should = chai.should();

chai.use(chaiHttp);

describe('API routes', () => {

  beforeEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
      .then(() => {
        return knex.seed.run()
        .then(() => {
          done();
        });
      });
    });
  });

  afterEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      done();
    });
  });

  describe('GET /admin/users', () => {
    it('should return all resources', (done) => {
      chai.request(server)
      .get('/admin/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.eql(5);
        res.body[0].should.have.property('name');
        res.body[0].name.should.eql('Matt Gordon');
        res.body[0].should.have.property('email');
        res.body[0].email.should.eql('mattgordon@cobeats.com');
        res.body[0].should.have.property('admin');
        res.body[0].admin.should.eql(true);
        done();
      });
    });
  });

  describe('GET /admin/users/:id', () => {
    it('should return one resource by id', (done) => {
      chai.request(server)
      .get('/admin/users/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.eql('Matt Gordon');
        res.body.should.have.property('email');
        res.body.email.should.eql('mattgordon@cobeats.com');
        res.body.should.have.property('admin');
        res.body.admin.should.eql(true);
        done();
      });
    });
  });

  describe('POST /admin/users', () => {
    it('should create a resource', (done) => {
      chai.request(server)
      .post('/admin/users')
      .send({
        name: 'New Resource',
        email: 'newresource@cobeats.com',
        admin: false
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.eql('New Resource');
        res.body.should.have.property('email');
        res.body.email.should.eql('newresource@cobeats.com');
        res.body.should.have.property('admin');
        res.body.admin.should.eql(false);
        done();
      });
    });
  });

});
