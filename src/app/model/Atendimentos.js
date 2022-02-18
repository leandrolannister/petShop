class Atendimentos {
    constructor() {
        this._connection = require('../../infra/connection.js');
    }

    store(data) {        
        return new Promise((resolve, reject) => {
            let query = `INSERT INTO atendimentos(cliente,pet,servico,status,dtAtendimento,observacoes)
            VALUES('${data.cliente}','${data.pet}','${data.servico}','${data.status}','${data.dtAtendimento}','${data.observacoes}');`;
           
            this._connection.query(query, (error) => {
                if (error)
                    reject(`Error on method store: ${error}`);
                resolve("Atendimento was created successfully");
            });
        });
    }

    show(){
        let sql = "SELECT * FROM atendimentos";
        return new Promise((resolve,reject) => {
           this._connection.query(sql, (error,data) => {
              if (error)
                reject(`Error on show: ${error}`);
              resolve(data);   
           });    
        });
    }

    seek(cod){
        let id = parseInt(cod);
        let sql = `SELECT * FROM atendimentos where id in(${id})`;
        return new Promise((resolve,reject) => {
            this._connection.query(sql, (error,result) => {
                let data = result.pop();
                if (error)
                  reject(`Error on seek: ${error}`);
                resolve(data);  
            });
        });
    }

    update(data){
        return new Promise((resolve,reject) => {
            let sql = `update atendimentos set
                         cliente = ?
                       where id in (?)`;
            
            this._connection.query(sql,[
               data.cliente,
               data.id
               ],
               (error,result) => {
                  if (error)
                     reject(`Error on method update:${error}`);
                  resolve(result);      
                });            
        });
    }

    delete(id){
        return new Promise((resolve,reject) => {
            let sql = "delete from atendimentos where id in(?)";
            this._connection.query(sql,[id], (error, success) => {
                if (error)
                  reject(`Error on method delete: ${error}`);
                resolve(success);  
            });
        });
    }
}

module.exports = Atendimentos;