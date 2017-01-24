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

  describe('User Routes', () => {

    describe('GET /users', () => {
      it('should return all users', (done) => {
        chai.request(server)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.eql(5);
          res.body[0].should.have.property('username');
          res.body[0].username.should.eql('chris');
          done();
        });
      });
    });

    describe('GET /users/:id', () => {
      it('should return one user by id', (done) => {
        chai.request(server)
        .get('/users/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('username');
          res.body.username.should.eql('chris');
          done();
        });
      });
    });

    describe('POST /users', () => {
      it('should create a user', (done) => {
        chai.request(server)
        .post('/users')
        .send({
          username: 'newuser',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('username');
          res.body.username.should.eql('newuser');
          done();
        });
      });
    });

    describe('PUT /users/:id', () => {
      it('should update a single user by id', (done) => {
        chai.request(server)
        .put('/users/1')
        .send({
          username: 'updatename',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          done();
        });
      });
      it('should NOT update a user if the id field is part of the request', (done) => {
        chai.request(server)
        .put('/users/1')
        .send({
          id: 20,
          name: 'Larry Beats'
        })
        .end((err, res) => {
          res.should.have.status(422);
          res.should.be.json;  // jshint ignore:line
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.error.should.eql('You cannot update the id field');
          done();
        });
      });
    });

    describe('DELETE /users/:id', function() {
      it('should delete a user', (done) => {
        chai.request(server)
        .delete('/users/1')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json; // jshint ignore:line
          response.body.should.be.a('object');
          chai.request(server)
          .get('/users')
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;  // jshint ignore:line
            res.body.should.be.a('array');
            res.body.length.should.equal(4);
            done();
          });
        });
      });
    });
  });

  describe('Message Routes', () => {

    describe('GET /messages', () => {
      it('should return all messages', (done) => {
        chai.request(server)
        .get('/messages')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          done();
        });
      });
    });

    describe('GET /messages/:id', () => {
      it('should return one message by id', (done) => {
        chai.request(server)
        .get('/messages/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          done();
        });
      });
    });

    describe('POST /messages', () => {
      it('should create a message', (done) => {
        chai.request(server)
        .post('/messages')
        .send({
          user_id: 4,
          content: 'newuser',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          done();
        });
      });
    });

    describe('PUT /messages/:id', () => {
      it('should update a single user by id', (done) => {
        chai.request(server)
        .put('/messages/1')
        .send({
          content: 'updated message content',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          done();
        });
      });
      it('should NOT update a message if the id field is part of the request', (done) => {
        chai.request(server)
        .put('/messages/1')
        .send({
          id: 20
        })
        .end((err, res) => {
          res.should.have.status(422);
          res.should.be.json;  // jshint ignore:line
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.error.should.eql('You cannot update the id field');
          done();
        });
      });
    });

    describe('DELETE /messages/:id', function() {
      it('should delete a message', (done) => {
        chai.request(server)
        .delete('/messages/1')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json; // jshint ignore:line
          response.body.should.be.a('object');
          chai.request(server)
          .get('/messages')
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;  // jshint ignore:line
            res.body.should.be.a('array');
            res.body.length.should.equal(4);
            done();
          });
        });
      });
    });
  });

});
