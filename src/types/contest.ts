export interface ContestResult {
  account_id: number;
  contest_id: number;
  date: string;
  event: string;
  handle: string;
  id: number;
  new_rating: number;
  old_rating: number;
  place: number;
  rating_change: number;
  score: number;
}

export interface ApiResponse {
  meta: {
    total_count: number;
    limit: number;
    offset: number;
  };
  objects: ContestResult[];
}

export interface PlatformStats {
  platform: string;
  rating: number;
  currentRank: number;
  maxRating: number;
  bestRank: number;
  maxRatingChange: number;
  totalContests: number;
  recentPerformance: number;
  ratingChange: number;
  color: string;
  rankName: string;
  handle: string;
  contestHistory: ContestResult[];
  bestContests: ContestResult[];
} 