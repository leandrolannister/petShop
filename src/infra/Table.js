class Table {

    start(connection) {
        this._connection = connection;
    }

    createAtendimentos() {
        return new Promise((resolve, reject) => {
            const sql = "CREATE TABLE IF NOT EXISTS atendimentos(id int auto_increment primary key," +
                "cliente varchar(50) not null, pet varchar(20)," +
                "servico varchar(20) not null,status varchar(20) not null," +
                "dtAtendimento datetime not null," +
                "observacoes text)";

            this._connection.query(sql, (error) => {
                if (error)
                    reject(`Error: ${error}`);
                resolve('Table atendimentos as create successfully');
            });
        });
    }
}

module.exports = new Table;