var express = require ("express");
var app = express();

app.use(express.urlencoded({extend : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res)=>{
    res.status(200).send("<h1>API-CHAT</h1>")
}));

app.use('/', router.get('/sobre', (req, res)=>{
    res.status(200).send({
        "nome": "Api=chat",
        "versao": "0.1.0",
        "autor": "Natalia korsack"
    })
 }));

 app.use("/salas", router.get("/salas", (req, res, next)=>{
    const salaController = require("./controllers/salaControllers");
    let resp= salaController.get();
    res.status(200).send(resp);
 }))
module.exports=app;