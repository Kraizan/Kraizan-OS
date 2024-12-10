const BASE_URL = import.meta.env.VITE_CLIST_API_URL || 'https://clist.by:443/api/v4/statistics';
const API_KEY = import.meta.env.VITE_CLIST_API_KEY;

export const getContestEndpoint = (accountId: string) => 
  `${BASE_URL}/?total_count=true&account_id=${accountId}&coder_id=38869&place__isnull=false&new_rating__isnull=false&rating_change__isnull=false&order_by=-date`;

export const getAuthHeader = () => ({
  Authorization: `ApiKey ${API_KEY}`,
}); 