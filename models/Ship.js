import mongoose from 'mongoose';

const ShipSchema = new mongoose.Schema({
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
        ref: 'ShipRole',
        required: true,
    },
    ability: [{
        type: String,
    }],
    activateShardCount: {
        type: Number,
        required: true,
    },
    cargoShip: {
        type: Boolean,
        required: true,
    },
});

ShipSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id.toString();
        delete ret._id;
    },
    versionKey: false,
});

export default mongoose.models.Ship || mongoose.model('Ship', ShipSchema);
