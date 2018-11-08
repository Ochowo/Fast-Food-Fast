// Import modules
import express from 'express';

// Express app
const app = express();


// Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
export default app;
