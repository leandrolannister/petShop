module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        res.send('Welcome to route atendimento');
    });

    app.post('/atendimentos', (req,res) => {
        console.log(req.body);
    });
}