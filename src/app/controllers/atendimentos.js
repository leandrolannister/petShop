module.exports = app => {

    let moment = require('moment');

    let Atendimento = require('../model/Atendimentos.js');
    let atendimento = new Atendimento();

    let Helper = require('../help/Helper.js');
    let helper = new Helper();

    app.get('/atendimentos', (req, res) => {
        res.send('Welcome to route atendimento');
    });

    app.post('/atendimentos', (req, res) => {
        
        helper.validadeNome(req.body.cliente).then(() => {

            const dtAtendimento = moment().format('YYYY-MM-DD HH:MM:SS');
            req.body = { ...req.body, dtAtendimento }

            atendimento.store(req.body).then((success) => {
                return res.status(200).json({ message: `success` });
            }).catch((error) => {
                return res.status(500).json({ error: `${error}` });
            });

        }).catch((error) => {
            return res.status(204).json({ error: `${error}` });
        })
    });
}