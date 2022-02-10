module.exports = app => {
    let Atendimento = require('../model/Atendimentos.js');
    let atendimento = new Atendimento();

    app.get('/atendimentos', (req, res) => {
        res.send('Welcome to route atendimento');
    });

    app.post('/atendimentos', (req,res) => {
        
        atendimento.store(req.body)
        .then((success) => {
            return res.status(200).json(success);
        }).catch((error) => {
            return res.status(500).json(error);
        });       
    });
}