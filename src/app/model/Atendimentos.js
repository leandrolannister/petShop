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
}

module.exports = Atendimentos;