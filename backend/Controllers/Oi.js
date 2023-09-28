module.exports = class OiController{
    static async initial(req,res){
        res.status(200).json({message:"deu certo"})
    }
    static async doc(req,res){
        res.status(200).json({message: "api feita pra....."})
    }
}