import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db';
// Set up the express app
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// get all orders
app.get('/api/orders', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'orders retrieved successfully',
    orders: db,
  });
});
// get a single order
app.get('/api/orders/:id', (req, res) => {
  const order = db.find(c => c.id === parseInt((req.params.id), 10));
  if (!order) res.status(404).send('Order does not exist');
  res.status(200).send({
    success: 'true',
    message: 'order successfully retrieved',
    order,
  });
});
// get a single order
app.post('/api/orders/', (req, res) => {
  const order = {
    id: db.length + 1,
    name: req.body.name,
    date: new Date().toDateString(),
    status: req.body.status,
    price: req.body.price,
  };
  db.push(order);
  res.send('Order added successfuly');
});
