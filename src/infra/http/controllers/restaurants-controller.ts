import { Request, Response } from "express";
import { GetRestaurantsUseCase } from "../../../app/use-cases";
import { ICoordeinatesRequest } from "../../../@shareds";

export class GetRestaurantsController {
  async handle(req: Request, res: Response) {
    const { latitude, longitude } = req.query;

    const useCase = new GetRestaurantsUseCase();

    const data: ICoordeinatesRequest = { latitude: parseFloat(latitude as string), longitude: parseFloat(longitude as string) };
    const index = await useCase.execute(data);

    return res.status(index.status).json(index.data);
  };
}

