import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI!, { dbName: process.env.MONGODB_SERVER});
mongoose.Promise = global.Promise;

export const db = {
    User: userModel(),
    Appointment: appointmentModel()
};

// mongoose models with schema definitions

function userModel() {
    const schema = new Schema({
        email: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phone: {type: String, required: true},
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.User || mongoose.model('User', schema);
}

function appointmentModel(){
    const schema = new Schema({
        time: {type: String},
        employee: {type: String},
        client: {type: String},
        services: {type: [String]},
    })

    return mongoose.models.Appointment || mongoose.model('Appointment', schema);
}