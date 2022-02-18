class Helper {

    validadeNome(cliente) {
        return new Promise((resolve, reject) => {
            if (cliente.length <= 2 || cliente == undefined)
                reject("nome deve ter mais de 3 catacteres");
            resolve(true);
        });
    }

    static validateId(value) {
        let id = parseInt(value);
        return new Promise((resolve,reject) => {
            if (id == undefined || id <= 0)
               reject(`id incorreto`);
            resolve(id);
        });
    }
}

module.exports = Helper;