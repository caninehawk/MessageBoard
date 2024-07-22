const express =  require("express");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const indexRouter = require("./routes/indexRouter").indexRouter;
const messageRouter = require("./routes/messageRouter");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(3000);