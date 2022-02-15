const moment = require('moment');
const Atendimento = require('../model/Atendimentos.js');
const Helper = require('../help/Helper.js');

module.exports = app => {   
    app.get('/atendimentos', (req, res) => {
        res.send('Welcome to route atendimento');
    });

    app.post('/atendimentos', (req, res) => {
        let helper = new Helper(); 
        helper.validadeNome(req.body.cliente).then((log) => {
            const dtAtendimento = moment().format('YYYY-MM-DD HH:MM:SS');
            req.body = { ...req.body, dtAtendimento }
            
            let atendimento = new Atendimento();  
            atendimento.store(req.body).then((success) => {
                return res.status(200).json({ message: `${success}` });
            }).catch((error) => {
                return res.status(500).json({ error: `${error}` });
            });

        }).catch((error) => {
            return res.status(204).json({ message: `${error}` });
        });
    });
}