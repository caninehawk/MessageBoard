const { Router, app } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
  const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Message" },
  ];


indexRouter.get("/", (req,res,next) => {
    res.render('indexResponse', {links: links, messages: messages});
})

exports.indexRouter = indexRouter;
exports.messages = messages;