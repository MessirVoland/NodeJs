const express = require('express');

const hostname = '192.168.3.129';
const port = 3306;

const app = express();

class Cat{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge(){
        return this.age;
    }

    static compare(catA, catB) {
        return catA.age-catB.age;
    }

};

app.get("/", function (req, res) {
    //console.log(req);
    console.log("Server /")
    res.send("Just another test, go away from here..");
});


app.get("/api/test", function (req, res) {
    //console.log(req);
    console.log("Server /GET/api/test")
    let cats =[];
    cats.push(new Cat("Мурзик", 2));
    cats.push(new Cat("Васька", 5));
    cats.push(new Cat("Снежок", 1));

    let result = "";
    result += JSON.stringify(cats);
    result += "<br>";
    cats.sort(Cat.compare)
    result += JSON.stringify(cats);

    res.send(result);
});

app.listen(port,() => {
    console.log(`Server running at port:${port}/`);
});
