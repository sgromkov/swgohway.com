import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    swgohggBaseId: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    power: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    alignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alignment',
        required: true,
    },
    factions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faction'
    }],
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
    },
    ability: [{
        type: String,
    }],
    ship: {
        type: String,
    },
    shipSlot: {
        type: Number,
    },
    activateShardCount: {
        type: Number,
        required: true,
    },
    leader: {
        type: Boolean,
        required: true,
    },
    fleetCommander: {
        type: Boolean,
        required: true,
    },
    galacticLegend: {
        type: Boolean,
        required: true,
    },
});

CharacterSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id.toString();
        delete ret._id;
    },
    versionKey: false,
});

export default mongoose.models.Character || mongoose.model('Character', CharacterSchema);
