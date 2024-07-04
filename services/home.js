import { fetchAPI } from '../utils/fetcher';
import { API_ENDPOINTS } from '../utils/constants';

export const fetchDashboardData = async () => {
  const makes = await fetchAPI(API_ENDPOINTS.MAKES);
  const bodies = await fetchAPI(API_ENDPOINTS.BODIES);
  const featuredCars = await fetchAPI(API_ENDPOINTS.FEATURED_CARS);
  const comparisons = await fetchAPI(API_ENDPOINTS.COMPARISONS);
  const instantUsedCars = await fetchAPI(API_ENDPOINTS.INSTANT_USED_CARS);
  const videos = await fetchAPI(API_ENDPOINTS.VIDEOS);
  const blogs = await fetchAPI(API_ENDPOINTS.BLOGS);

  return { makes, bodies, featuredCars, comparisons, instantUsedCars, videos, blogs };
};
