import express from 'express';
import OrdersController from '../controllers/OrdersController';
// create a route handler with express.Router()
const router = express.Router();
// get all orders
router.get('/api/orders', OrdersController.getAllOrders);
// get a single order
router.get('/api/orders/:id', OrdersController.getOrder);
// creat an order
router.post('/api/orders/', OrdersController.createOrder);
// update an existing order
router.put('/api/orders/:id', OrdersController.updateOrder);
export default router;
