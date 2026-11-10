import {knex} from "../database/knex.js";

async getAll() {
    const jogo = await knex('jogo')
    .select("*").returning("*");
    return jogo;
}

class name {
    constructor(parameters) {
        
    }
}