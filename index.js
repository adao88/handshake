const express = require('express')
const path = require('path');
const app = express()
const bodyParser = require('body-parser');
const {db} = require('./db/index')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')


app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
require('dotenv').config()

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(session({
    secret              : 'secretStuff',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    cookie: { maxAge: 1000 * 60 * 60 }
}));

const {userRouter} = require('./routes/userLogging')
const {userApiRouter} = require('./routes/apis/userData')

app.use(cookieParser())


app.use('/', userRouter)
app.use('/api', userApiRouter)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT)