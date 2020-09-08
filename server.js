import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// Connect to our Atlas instance
// https://docs.mongodb.com/manual/reference/connection-string/
// Connection Options:  https://mongoosejs.com/docs/4.x/docs/connections.html
mongoose.connect(
    'mongodb+srv://schpeyeder-web-user:NKgx5GUnUnvccim1@schpeyeder-mongo.d98wp.gcp.mongodb.net/schpeyeder-db?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));