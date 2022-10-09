const express = require("express");
const fs = require("fs");
const studentRouter = require("./routes/student");
const facultyRouter = require("./routes/faculty");

const SERVER_PORT = 3001;
const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use((req, res, next) =>{
    const cType = req.headers["content-type"];
    console.log(`ContentType: ${cType}`);
    const date = new Date();
    const data = `${req.method} => ${req.url}, ${date.toLocaleDateString()} ${date.toLocaleTimeString()}\n`
    console.log(data);
    fs.appendFile("./logs.txt", data, (err) => {});
    next();
})

app.use("/api/v1/student", studentRouter);
app.use("/api/v1/faculty", facultyRouter);
app.use("/api/v1/teacher", facultyRouter);  //same route
app.use("/api/v1/professors", facultyRouter); //same route


app.route("/hello")
    .get(function (req, res) {
        res.status(200).send({ message: "Get - /Hello" });
    })
    .post((req, res)=>{
        res.status(200).send({message: "POST - /Hello"});
    })
    .put((req, res)=>{
        res.status(200).send({message: "PUT - /Hello"});
    })
    .delete((req, res)=>{
        res.status(200).send({message: "DELETE - /Hello"});
    })

app.listen(SERVER_PORT, () =>{
    console.log(`server runnig http://localhost:${SERVER_PORT}`);
});

/*
    /api/v1/student/fulltime
    /api/v1/student/parttime
    /api/v1/student/sessional


    /api/v1/faculty/fulltime
    /api/v1/faculty/parttime

*/