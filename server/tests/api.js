import chai from 'chai';

import request from 'supertest';

import app from '../app';

const { expect } = chai;

describe('When a user requests for a list of orders', () => {
  it('should return an array containing orders', () => {
    request(app)
      .get('/api/orders');
    expect(200);
  });
});
describe('When a user requests for a specific order', () => {
  it('should return an object with specific order details', () => {
    request(app)
      .get('/api/orders/:id');
    expect(200);
  });
});
describe('When a user creates an order', () => {
  it('should be added to the orders array', () => {
    request(app)
      .get('/api/orders/');
    expect(200);
  });
});
describe('When a user edits an order', () => {
  it('the new information should be updated', () => {
    request(app)
      .get('/api/orders/:id');
    expect(200);
  });
});
describe('When a user deletes an order', () => {
  it('should be removed from orders array', () => {
    request(app)
      .get('/api/orders/:id');
    expect(200);
  });
});
