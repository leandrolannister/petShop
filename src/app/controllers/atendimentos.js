module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        res.send('Welcome to route atendimento');
    });
}