const express = require('express')

const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000

const pass ="@passwordvolunteer";
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://myVolunteerNetworkDB:@passwordvolunteer@cluster0.18zpv.mongodb.net/volunteerNetworkdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("volunteerNetworkdb").collection("registeredVolunteer");
  
  app.post('/addVolunteer', (req, res) => {
       const registeredVolunteer = req.body;
       console.log(registeredVolunteer)
  })
});




app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port)