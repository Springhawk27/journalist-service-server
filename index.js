const express = require('express');
const cors = require('cors')
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');





const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());

// newsroompsithurism
// pass: 04uqKcLGOejCFPU4



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.42wwv.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        const serviceCollection = client.db('newsrommpsithurism').collection('services');


        app.get('/services', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });




    }
    finally {

    }

}

run().catch(err => console.error(err));





app.get('/', (req, res) => {
    res.send('Newsroom Psithurism server is running online');
});



app.listen(port, () => {
    console.log('Newsroom Psithurism Server is Running on port ', port);
})