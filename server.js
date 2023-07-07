const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty')
const path = require('path')
require('dotenv').config()
const app  = express()
const passport = require('passport');// 用户认证模块passport
const config = require('./config')

require('./db')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multipart());//解析form-data提交数据

app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));
bodyParser
// app.use(express.json({}))
app.use(passport.initialize());// 初始化passport模块
app.use(passport.session());


const opts = {
    etag: false,
    lastModified: true,
    maxAge: 0
    // lastModified: false,
    // maxAge: 86400000
  }
app.use('/static', express.static(path.join(__dirname, 'static'), opts))

app.use((req, res, next) => {
    req.passport = passport // 为了在中间件中可以调用到 passport
    // res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'OPTIONS') {
      return res.send(200);
    } else {
      next();
    }
  });

require('./router')(app);
// require('./passport')(passport);
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(3002, () => {
    console.log('http://localhost:3001')
})