const Note = require('../models/Note')

module.exports = class NotesController{
    static async getAll(req,res){
        // res.status(200).json ({message: "rota para pegar todos"})
        try{
            const notes = await Note.findAll();
            res.status(201).json(notes)
        } catch (error) {
            console.log(error)
            res.status(500).json({error:"algo deu erro"})
        }
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