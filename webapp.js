
const express = require ("express");
const app = express();

//main page
app.get("/", function(req,res) {
	res.send (
        "Welcome to my first Node.js web site." +
        "<p><a href=\"/contact\"> Contact Information </a></p>"  +
        "<p><a href=\"/bio\"> My Bio </a></p>"
    );
});

//contact page
app.get("/contact", function(req,res) {
	res.send(` 
        <h1>Contact Information </h1>
        <p>My name is Rahul Reddy Amireddy.</p>
        <p>Phone: 6144830630</p>
        <p>Email: rahulamireddy@gmail.com </p>
     `);
});

//bio page
app.get("/bio", function(req,res){
    res.send (` 
        <h1>Bio</h1>
        <p>I'm Rahul. I have completed my Bachelors in Mechanical engineering at Mahindra University. </p>
        <p> I'm currently pursuing my Master's in Information Technology at Franklin University</p>`);
})

//If the code runs on Heroku, assign a dynamic port number
let port = process.env.PORT;

//If it runs locally assign 8002 static port
if (port == null || port == "") {
  port = 8002;
}
app.listen(port);