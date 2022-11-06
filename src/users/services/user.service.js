import { User } from "../models/user.js"

export class UserService {
    constructor() {
        // this.repository = new Crud(users);
    }
    
    add = (user) => {
        const repository = new User({
            author: user.author,
            title: user.title,
            body: user.body,
            geo: user.geo,
        })
        return repository.save();
    }

    update = (id, user) => this.repository.Modifier(id, user);

    getOne = (id) => this.repository.Chercher(id);

    delete = (id) => this.repository.Supprimer(id);
    
    getAll = () => this.repository.tous();
}