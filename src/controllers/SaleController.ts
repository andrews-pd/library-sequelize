import { NextFunction, Request, Response } from "express";
import SaleService from "../services/SaleService";

class SaleController {
  private saleService: SaleService;
  constructor() {
    this.saleService = new SaleService();
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.body.user.id;
      const sales = await this.saleService.getAll(Number(userId));
      res.status(200).json(sales);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.body.user.id;
      req.body.userId = userId;
      const newSale = await this.saleService.create(req.body);
      res.status(201).json(newSale);
    } catch (error) {
      next(error);
    }
  }
  
}

export default SaleController;