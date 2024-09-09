const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listaDesejoSchema = new Schema({
    idGrupo: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true
    },
    idParticipante: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    item: {
        type: String,
        required: true
    }
});

const ListaDesejo = mongoose.model('ListaDesejo', listaDesejoSchema);

module.exports = ListaDesejo;