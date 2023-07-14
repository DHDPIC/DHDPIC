console.log("hello there");
console.log("question 1");
let employees = '{"employees" : [' +
'{"firstname":"john", "lastname":"doe", "salary": 1000},' +
'{"firstname":"jane", "lastname":"sid", "salary": 1000},' +
'{"firstname":"brig", "lastname":"sid", "salary": 1000}' +
']}';

//console.log(employees);
const obj = JSON.parse(employees);
console.log(obj);



console.log("question 2");
/*console.log(obj);
console.log(obj["employees"].length);
console.log(obj["employees"][0]["firstname"]);

let t = 0;
for(let i=0; i<3; i++) {
    t += obj["employees"][i]["salary"];
}

console.log("total salary = " + t);

console.log("company stuff...");
*/
let company = '{"name":"mycompany", "website":"www" }';

let obj2 = JSON.parse(company);
console.log(obj2);

//assign employees array to obj2
obj2["employees"] = obj["employees"];
// and check we are accessing employees
console.log(obj2["employees"][0]["firstname"]);



//obj["employees"].push( JSON.parse('{"firstname":"moni", "lastname":"few"}') );
//obj["employees"].push( {"firstname":"moni", "lastname":"few"} );

//console.log(obj);

//console.log(obj["employees"].length);

console.log("question 3");
obj2["employees"].push( {"firstname":"moni", "lastname":"few", "salary":500} );
console.log(obj2["employees"]);