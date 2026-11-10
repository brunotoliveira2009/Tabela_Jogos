import {jogoService} from "../Service/jogo.Service.js";

async getAll() {
    const jogo = await jogoService.getAll();
    return jogo;
}