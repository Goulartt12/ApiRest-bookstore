import livro from "../models/Livro.js"

class LivroController{

    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }
        catch (erro){
            res.status(500).json({message: `${erro.message}`});
        }
    };

    static async listarLivrosPorId(req, res){
        try {
            const id = req.params.id;
            const LivroId = await livro.findById(id);
            res.status(200).json(LivroId);
        }
        catch (error) {
            res.status(500).json({message: `${erro.message}`});
        }
    };

    static async cadastrarLivro(req, res){
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Livro cadastrado!", livro: novoLivro});
        } 
        catch (error) {
            res.status(500).json({message: `${erro.message}`});
        }
    };

    static async AtualizarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado!"});
        }
        catch (error) {
            res.status(500).json({message: `${erro.message}`});
        }
    };

    static async DeletarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro removido!"});
        }
        catch (error) {
            res.status(500).json({message: `${erro.message}`});
        }
    };

    static async BuscaLivro(req, res){
        const titulo = req.query.titulo
        try {
            const livrosPorTitulo = await livro.find({titulo: titulo});
            res.status(200).json(livrosPorTitulo);
        }
        catch (erro) {
            res.status(500).json({message: `${erro.message}`});
        }
    }

};

export default LivroController;