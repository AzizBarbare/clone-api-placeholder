// import { userService } from "../services/user.service.js";
import { UserService } from "../services/user.service.js";

export class UserController {
    constructor() {
        this.userService = new UserService();
    }

    add = (user) => this.userService.add(user);

    update = (id, user)  => this.userService.update(id, user);

    getOne = (id) => this.userService.getOne(id); 

    delete = (id) => this.userService.delete(id);
    
    getAll = () => this.userService.getAll(); 

}