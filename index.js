var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;
const cardList = [
    {
      title: "Kitten 1",
      image: "images/kitten-3.jpg",
      link: "About Kitten 1",
      desciption:
        "Hey, my name is Fluffy. I'm a cute little kitten with fluffy fur.",
    },
    {
      title: "Kitten 2",
      image: "images/kitten-2.jpg",
      link: "About Kitten 2",
      desciption:
        "Hey, my name is Whiskers. I love to play and explore new places.",
    },
  ];
app.get('/api/cards',(req, res)=>{
    res.json({statusCode: 200, data: cardList, message: "Success"});
});
app.listen(port,()=>{
console.log("App listening to: "+port)
})