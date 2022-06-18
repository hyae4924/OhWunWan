require("dotenv").config();
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes');
const app = express();
const upload = require('./modules/multer');


//미들웨어
//req.file 객체를 생성함
app.use( upload.single('file'))
//로그를 남겨줌
app.use(morgan('dev'))
//요청의 쿠를 쉽게 추출할수있게 도와줌
app.use(cookieParser());
//json으로 이루어진 요청바디를 받을경우를위해사용
app.use(express.json());
//추가적인 보안을 사용하지않음??
app.use(express.urlencoded({ extended: false }));
//cors요청처리
app.use(
  cors({
    origin: true/*['http://localhost:3000', 'https://localhost:3000']*/,//요청을 허용할 오리진
    credentials: true,//사용자 인증이 필요한 리소스접근이 필요한경우 true설정
    methods: ['GET', 'POST', 'DELETE', "PATCH", 'OPTIONS']//허용한 메소드들
  })
);


app.use('/', indexRouter)
app.get('/', (req, res) => {
  res.send('ohwunwuan')
})

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log(`http server running in ${PORT}`));


