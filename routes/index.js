//to check server works!
module.exports = app => {
    app.get('/', (requestAnimationFrame, res) => {
        res.json({
            response: 'API Works'
        })
    });
}
