import API_ENDPOINT from '../globals/api-endpoint';
import FetchControl from './fetch-control';

class RestaurantsDataSource {
  static async listOfRestaurants() {
    const response = await FetchControl.get(API_ENDPOINT.LIST);
    return response === null ? response : response.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await FetchControl.get(API_ENDPOINT.DETAIL(id));
    return response === null ? response : response.restaurant;
  }
}

export default RestaurantsDataSource;
