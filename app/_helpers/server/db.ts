import mongoose from 'mongoose';


const Schema = mongoose.Schema;

try {mongoose.connect(process.env.MONGODB_URI!, { dbName: process.env.MONGODB_DATABASE_NAME });}
catch (e){
    console.log("Could not connect to database, because:\n", e)
}

mongoose.Promise = global.Promise;

export const db = {
    User: userModel(),
    Agenda: agendaModel(),
    Appointment: appointmentModel(),
};

// mongoose models with schema definitions

function userModel() {
    const schema = new Schema({
        email: { type: String, unique: true, required: true },
        phone: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
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

function agendaModel() {
    const schema = new Schema({
        name: {type: String, required: true},
        ownerId: {type: Schema.Types.ObjectId, ref:'User', required: true},
        
        participants:[{ type: Schema.Types.ObjectId, ref: 'User' }],
        appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,

        transform: function (doc, ret) {
            delete ret._id;
        }
    });
    return mongoose.models.Agenda || mongoose.model('Agenda', schema);
}

function appointmentModel() {
    const schema = new Schema({
        time: { type: String },
        employee: { type: String },
        client: { type: String },
        services: { type: [String] },
    });
    return mongoose.models.Appointment || mongoose.model('Appointment', schema);
}
