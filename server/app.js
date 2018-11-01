import express from 'express';
import db from './db/db';
// Set up the express app
const app = express();
// get all orders

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}....`));
export default app;
