import API_ENDPOINT from '../globals/api-endpoint';
import FetchControl from './fetch-control';

class PostReview {
  static async post(fetchData) {
    const response = await FetchControl.post(API_ENDPOINT.REVIEW, fetchData);
    return response;
  }
}

export default PostReview;
