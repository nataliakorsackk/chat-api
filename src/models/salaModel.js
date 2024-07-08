function listarSalas(){
    return [
        {
            /**"_id": {
            "$oid": "643ece43ea11e6e5b0421f10"
        },**/
            "nome": "Guerreiros da infocimol",
            "tipo": "publica"
        },{
            /**"_id": {
                "$oid": "643ecec1ea11e6e5b0421f12"
            },**/
                "nome": "Só os melhores",
                "tipo": "privada",
                "chave": "info632b"
            },{/** 
                "_id": {
                "$oid": "643ecec1ea11e6e5b0421f18"
            },*/
                "nome": "Fãs do js",
                "tipo": "publica"
        }
    ];
}
    module.exports = {listarSalas};