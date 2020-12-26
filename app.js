const mongoose = require('mongoose');

const express = require("express");
const app = express();

const db = require('./config/keys').mongoURI;

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const bodyParser = require('body-parser');

const passport = require('passport');
const path = require('path');
const User = require('./models/User');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
.connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
    

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/users", users);
app.use("/api/tweets", tweets);

app.use(passport.initialize());
require('./config/passport')(passport);

app.get(`/author/:id`, (req, res) => {
  // let id = req.params.id
  User.findOne({_id: req.params.id})
    .then(result => res.send(result)).catch(err => console.log(err))
})

app.get(`/search/:query`, (req, res) => {
  User.find({handle: {$regex: `${req.params.query}`}})
    .then(result => res.send(result)).catch(err => console.log(err))

  // let id = req.params.id
  // const regex = new RegExp(escapeRegex(req.params.query), 'gi');
  // User.find({handle: regex})
  //   .then(result => res.send(result)).catch(err => console.log(err))
  // User.aggregate([{
  //   $search: {
  //     // "index": <index name>, // optional, defaults to "default"
  //     "text": {
  //       "query": req.params.query,
  //       "path": 'handle',
  //       "fuzzy": {
  //         "maxEdits": 1,
  //         "maxExpansions": 100,
  //       }
  //     }
  //   }
  // }, {
  //   $limit: 10
  // }
    
    
  // ])


  

})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
