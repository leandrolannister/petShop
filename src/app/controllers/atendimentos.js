module.exports = app => {
    let Atendimento = require('../model/Atendimentos.js');
    let atendimento = new Atendimento();
    let moment = require('moment');

    app.get('/atendimentos', (req, res) => {
        res.send('Welcome to route atendimento');
    });

    app.post('/atendimentos', (req,res) => {
        
        const dtAtendimento = moment().format('YYYY-MM-DD HH:MM:SS');
        
        req.body = {...req.body, dtAtendimento}
        
        atendimento.store(req.body)
        .then((success) => {
            return res.status(200).json({message: `success`});
        }).catch((error) => {
            return res.status(500).json({error: `${error}`});
        });       
    });
}