const ListaDesejoRepository = require('../repositories/listaDesejoRepository');

module.exports = {
    async addItem(request, response) {
        try {
            let { idGrupo, idParticipante, item } = request.body;
            let resultado = await ListaDesejoRepository.addItem(idGrupo, idParticipante, item);
            return response.json({
                "mensagem": "Item adicionado com sucesso!",
                "status": 200,
                "item": resultado
            });
        } catch (err) {
            return response.status(500).json({
                "mensagem": "Erro ao adicionar item: " + err,
                "status": 500
            });
        }
    },

    async removeItem(request, response) {
        try {
            let { idGrupo, idParticipante, item } = request.params;
            await ListaDesejoRepository.removeItem(idGrupo, idParticipante, item);
            return response.json({
                "mensagem": "Item removido com sucesso!",
                "status": 200
            });
        } catch (err) {
            return response.status(500).json({
                "mensagem": "Erro ao remover item: " + err,
                "status": 500
            });
        }
    },

    async getItens(request, response) {
        try {
            let { idGrupo, idParticipante } = request.params;
            let itens = await ListaDesejoRepository.getItens(idGrupo, idParticipante);
            if (itens.length === 0) {
                return response.status(404).json({
                    "mensagem": "Nenhum item encontrado!",
                    "status": 404
                });
            }
            return response.json({
                "mensagem": "Itens recuperados com sucesso!",
                "status": 200,
                "itens": itens
            });
        } catch (err) {
            return response.status(500).json({
                "mensagem": "Erro ao buscar itens: " + err,
                "status": 500
            });
        }
    }
};
