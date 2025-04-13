import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";
import User from "../database/models/User";

class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  public async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await this.userService.login(email, password);
      if (user.message) {
        return res.status(401).json({ message: user.message });
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;
      const createdUser = await this.userService.create(user);
      res.status(201).json(createdUser);
    } catch (error) {
      next(error);
    }
  }

}

export default UserController;