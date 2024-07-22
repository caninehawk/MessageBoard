const { Router, app } = require("express");

const messageRouter = Router();
const messages = require('./indexRouter').messages;
const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Message" },
  ];

messageRouter.get("/", (req,res,next) => {
    res.render("newMessage",{links:links});
});

messageRouter.post("/", (req,res,next) => {
    const {user, message} = req.body;
    messages.push({ user: user, text: message, added: new Date()});
    console.log(messages);
    res.redirect("/");
})

module.exports = messageRouter;