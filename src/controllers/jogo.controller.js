import {jogoServices} from "../services/jogo"

async getAll(req, res) {
    try {
        const jogo = jogoServices.getAll();
        res.json(jogo);
    } catch (error){
    }
}