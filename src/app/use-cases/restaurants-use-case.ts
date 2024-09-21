import { badRequestResponse, CalculateDistance, errorResponse, HttpResponse, LoadRestaurants, restaurants, successResponse, UseCase } from '../../@shareds';
import { ICoordeinatesRequest } from '../../@shareds/interfaces';
import { IRestaurantsEntity } from '../entities';

export class GetRestaurantsUseCase implements UseCase {
  async execute({ latitude, longitude }: ICoordeinatesRequest): Promise<HttpResponse<IRestaurantsEntity[] | any>> {
    try {
      if (!latitude || !longitude) {
        return badRequestResponse({ message: 'Latitude and longitude are required ' });
      }

      if (restaurants.length === 0) {
        await LoadRestaurants();
      }

      const closestRestaurant = restaurants
        .map(restaurant => ({
          ...restaurant,
          distance: CalculateDistance(latitude, longitude, restaurant.latitude, restaurant.longitude)
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

      return successResponse(closestRestaurant);
    } catch (err: any) {
      return errorResponse(err);
    }
  }
}
