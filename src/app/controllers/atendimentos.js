const moment = require('moment');
const Atendimento = require('../model/Atendimentos.js');
const Helper = require('../help/Helper.js');

module.exports = app => {

    let atendimento = new Atendimento();

    app.get('/atendimentos', (req, res) => {
        atendimento.show().then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(400).json({message:`${error}`});
        });
    });

    app.get('/atendimentos/:id', (req,res) => {
        const { id } = req.params;
        atendimento.seek(id).then((data) => {
            res.status(400).json(data);
        }).catch((error) => {
            res.status(400).json({error: `${error}`});
        }); 
    });

    app.post('/atendimentos', (req, res) => {
        let helper = new Helper();
        helper.validadeNome(req.body.cliente).then((log) => {
            const dtAtendimento = moment().format('YYYY-MM-DD HH:MM:SS');
            req.body = { ...req.body, dtAtendimento }

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