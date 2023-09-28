module.exports = class NotesController{
    static async getAll(req,res){
        res.status(200).json ({message: "rota para pegar todos"})
    }
    static async createNote(req,res){
        res.status(200).json ({message: "rota para criar um"})
    }
    static async deleteNote(req,res){
        res.status(200).json ({message: "rota para deletar um"})
    }
    static async editNote(req,res){
        res.status(200).json ({message: "rota para editar um"})
    }
}