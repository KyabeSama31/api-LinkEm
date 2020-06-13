log = console.log

module.exports.home = async function home(req, res, next){
    try{
        log("Hello World")

        
        res.send('Hello World!')
    }catch(error){
        next(error)
    }
}