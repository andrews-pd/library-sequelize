import { ModelStatic } from "sequelize";  
import User from "../database/models/User";

class UserService {
  private userModel: ModelStatic<User> = User;
  constructor() {
    this.userModel = User;
  }

  public async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.findAll();
    return users;
  }
}

export default UserService;