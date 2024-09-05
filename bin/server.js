require("dotenv").config(); 
const app = require("../src/api");


console.log(process.env.API_PORT);
let port = process.env.API_PORT || 5000;

app.use((req, res, next)=>{
    next();  
});


app.listen(port);

console.log("Starting in port " + port)
console.log(`DB HOST: ${process.env.DB_HOST}`);