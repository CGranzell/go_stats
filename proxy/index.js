const express = require('express');
const morgan = require("morgan");
const {
  createProxyMiddleware
} = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 4000;
const HOST = "localhost";
const API_SERVICE_URL = "https://gohealth.hiq.se";

// Add headers before the routes are defined
app.use(function (_req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', 'https://playful-gumption-8420ca.netlify.app/');


  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Logging
app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

// Proxy endpoints
app.use('/statistics', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/statistics`]: '',
  },
  headers: {
    cookie: '_gcl_au=1.1.640228509.1677056627; _fbp=fb.1.1677056628022.1353401721; hubspotutk=70cfaa37a637bb8b9aa7e99fc682eda5; ai_user=Iinm9|2023-03-14T07:33:26.619Z; _ga=GA1.2.1096653824.1677056627; __hstc=6521645.70cfaa37a637bb8b9aa7e99fc682eda5.1677056628210.1679318435221.1679492636998.5; _ga_B1N34V7QK6=GS1.1.1679492636.7.0.1679492639.0.0.0; ARRAffinity=e0626f5e6852f4855a5f56304569fa400f626eb82af185ca565647512c020dc9; ARRAffinitySameSite=e0626f5e6852f4855a5f56304569fa400f626eb82af185ca565647512c020dc9; __RequestVerificationToken=4v6Y40HeqmvYrbQh6Bl65pPqqVP6G91ytAwEHvsVit5moW-IUOodC94pagu1GsJXGfmL_p0sOnF1TXFch2hjW9rkW16YGBEaVx4q4ntZsUA1; .AspNet.ApplicationCookie=Zo4lUUxZQgYA5qMaJI281Ie152N1-MTh_0AKlMhuuMwBp4SqkArXCoxhB2LuL5RVd86ndWjtbidpJoR-DIIqlzGaJpTg5tqCxsQpptA8bigNNR1M33R8PtQG_ZXwGA5ZUaAJn1D097W5HObzI5-jjkMa-jwUOzaZ0xOrhZqMbsNWA31dFhsypHy9z3SVQfRrNdQBfE28412mEqDQf9Vs4495RO0cidDEDddEMCnUN-9LF0ZT1lizlrnNrO3bkXwtY0qI3QNu7S69haQ9j-tTLpdRG5FtBGA7Kc7xj37h-CTXZF3vDTeq4FeLCRHb736BcM_c7KUexAp_JJVHJ_v7JpwxDdoLTZzOMnX9T6L0m57GSOR1jrwugbgh3fy3lR9QRkZLcpqq_Kc-evA9yGGWUfkw2Z1ycI25fa8GqOfI2oEcIsveJi7M7zVGeNQhd7xpy2hHcwdJhHZgyyPPo1CiuPFoOGTpcpmmDSSkXJRp5sO4iOv40hRSygmA2ES1dQWg8m9VSZFGBug_5NHVZPFf2A; ASP.NET_SessionId=xkhwsoladreaolwdylocs2r4; ai_session=TZJ4O|1681279463392|1681279522304.1'
  }
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});