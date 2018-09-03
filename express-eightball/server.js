const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const eightball = require('8ball');
app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

var item;
var answers = [
  'its certain',
  'its decidedly',
  'very doubtful',
   'dont count on it'
];

var questions = [];
// Redirect to list
app.get('/', (req, res) => {
   res.redirect('/home')
})

// Show the ask form
app.get('/', (req, res) => {
   res.render('add.ejs', {})
})

// Show the home form
app.get('/home', (req, res) => {
   res.render('home.ejs', {})
})


app.post('/answer', function (req, res) {
  var question = req.body.name;
  questions.push(question);
  item = answers[Math.floor(Math.random()*answers.length)];
  res.json({answer:item})

    res.render('home.ejs',{})
})
