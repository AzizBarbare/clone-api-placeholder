import mongoose from 'mongoose';


export class Database {
    constructor() {
        this.dbConnexion = null;
    }

    generateConnexion = async () => {
        try {
            this.dbConnexion = await mongoose.connect(
                "mongodb+srv://api-formation:api-formation@cluster0.w6uc9ja.mongodb.net/test"
            );
        } catch (err) {
            console.error(err);
            this.dbConnexion = null;
        }
    }

    getConnexion() {
        if(!this.dbConnexion) 
            this.generateConnexion();
        return this.dbConnexion;
    }
}