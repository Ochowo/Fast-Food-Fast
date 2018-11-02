import db from '../db/db';

class OrdersController {
  static getOrder(req, res) {
    const order = db.find(c => c.id === parseInt((req.params.id), 10));
    if (!order) res.status(404).send('Order does not exist');
    res.status(200).json(order);
  }

  static getAllOrders(req, res) {
    res.status(200).json(db);
  }

  static createOrder(req, res) {
    const order = {
      id: db.length + 1,
      name: req.body.name,
      date: new Date().toDateString(),
      status: req.body.status,
      price: req.body.price,
    };
    db.push(order);
    res.send('Order added successfuly');
  }

  static updateOrder(req, res) {
    const order = db.find(c => c.id === parseInt((req.params.id), 10));
    if (!order) res.status(404).send('Order not found');
    order.name = req.body.name;
    order.date = new Date().toDateString();
    order.status = req.body.status;
    order.price = req.body.price;
    res.send('order updated successfuly');
  }
}

export default OrdersController;
