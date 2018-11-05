import express from 'express';
import bodyParser from 'body-parser';
import router from './router/index';
// Setup the express app
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Visit /api/v1 to view API cheers!!!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
export default app;
