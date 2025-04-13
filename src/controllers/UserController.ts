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

}

export default UserController;