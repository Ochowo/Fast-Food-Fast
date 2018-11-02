import express from 'express';
import OrdersController from '../controllers/OrdersController';
// create a route handler with express.Router()
const router = express.Router();
// get all orders
router.get('/orders', OrdersController.getAllOrders);
// get a single order
router.get('/order/:id', OrdersController.getOrder);
// creat an order
router.post('/orders/', OrdersController.createOrder);
// update an existing order
router.put('/orders/:id', OrdersController.updateOrder);
export default router;
