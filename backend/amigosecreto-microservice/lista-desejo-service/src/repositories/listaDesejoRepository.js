const ListaDesejo = require('../models/listDesejo');

module.exports = {
    async addItem(idGrupo, idParticipante, item) {
        const novoItem = new ListaDesejo({ idGrupo, idParticipante, item });
        return await novoItem.save(); 
    },

    async removeItem(idGrupo, idParticipante, item) {
        return await ListaDesejo.findOneAndDelete({ idGrupo, idParticipante, item });
    },

    async getItens(idGrupo, idParticipante) {
        return await ListaDesejo.find({ idGrupo, idParticipante });
    }
};