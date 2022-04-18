const express = require('express');

const hostname = '127.0.0.1';
const port = 3306;

const app = express();

let cat = {
    name: "Мурзик",
    age: 2
};
app.get("/", function (req, res) {
    //console.log(req);
    console.log("Server /")
    res.send("Just another test, go away from here..");
});


app.get("/api/test", function (req, res) {
    //console.log(req);
    console.log("Server /GET/api/test")
    res.send(cat);
});

app.listen(port, () => {
    console.log(`Server running at port:${port}/`);
});
