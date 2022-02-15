class Helper {

    validadeNome(cliente) {
         return new Promise((resolve, reject) => {
            if (cliente.length <= 2 || cliente == undefined)
                reject("nome deve ter mais de 3 catacteres");
            resolve(true);
        });
    }
}

module.exports = Helper;