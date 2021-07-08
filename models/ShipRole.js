import mongoose from 'mongoose';

const ShipRoleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
});

ShipRoleSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id.toString();
        delete ret._id;
    },
    versionKey: false,
});

export default mongoose.models.ShipRole || mongoose.model('ShipRole', ShipRoleSchema);
