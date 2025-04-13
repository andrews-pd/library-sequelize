import { ModelStatic } from "sequelize";  
import User from "../database/models/User";
import md5 from "md5";
import { sign } from "../jwt/jwt";

class UserService {
  private userModel: ModelStatic<User> = User;
  constructor() {
    this.userModel = User;
  }

  public async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.findAll();
    return users;
  }

  public async login(_email: string, password: string) {
    const hasPassword = md5(password);
    const user = await this.userModel.findOne({
      where: {
        email: _email,
        password: hasPassword,
      },
    });

    if (!user) {
      return { message: "Invalid email or password" };
    }

    const { id, email } = user;
    const token = sign({ id, email });

    return { id, email, token };
  }
}

export default UserService;