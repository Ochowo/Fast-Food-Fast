import express from 'express';
import bodyParser from 'body-parser';
import router from './router/index';
// Setup the express app
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}....`));
export default app;
