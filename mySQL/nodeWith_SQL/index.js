const { faker } = require("@faker-js/faker");
const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Mourya@2104'
});

try{
  connection.query("SHOW TABLES", (err, result) => {
    if(err) throw err;
    console.log(result);
  });
}catch(err){
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};