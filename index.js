const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const logger = require('morgan');
const cors = require('cors')
const app = express();
const cookieParser=require('cookie-parser');
const connectDB = require('./connection/db');
const bodyParser = require('body-parser');
const tokenCheckAndGen = require('./controllers/generateToken')

const router = express.Router();
const environment = process.env.NODE_ENV; // development
// const routes = require('./routes/index.js');
const tokenRouter = require('./routes/tokenRouter');
const authRouter  = require('./routes/authRouter')
connectDB();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/v1',authRouter);

app.use('/api/v1/admin',tokenCheckAndGen.authenticateJWT,tokenRouter);
if (environment !== 'production') {
  app.use(logger('dev'));
}
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})