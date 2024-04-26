
const mongoose = require('mongoose');


const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const User = require('./User')
const {handleSignIn} = require('./controllers/signin');
const handleRegister = require('./controllers/resgister')
const handleAddPlayer = require('./controllers/addPlayers')
const showAllPlayers = require('./controllers/showAllPlayers')
const EditPlayers = require('./controllers/editPlayers');
const app = express();

mongoose.connect('mongodb+srv://test:test@cluster0.prozwlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{dbName:'sampleTeam'});

app.use(express.json())

app.use(cors())


app.post('/register', handleRegister(User, bcrypt))
app.post('/signin', handleSignIn(User, bcrypt))
app.post('/addPlayer', handleAddPlayer(User))
app.post('/showAllPlayers',showAllPlayers(User))
app.put('/editplayer',EditPlayers(User));

// const user = new User({username:'lossl',password:'asdjfhssjkasdf',teamName:'Fuck You', createdAt:new Date, players:[{name:'dsds',age:12}]})

// user.save().then(() => console.log('saved'));

app.listen(3001, () => {
    console.log('app is running on port 3001');
});