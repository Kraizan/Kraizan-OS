export interface Platform {
  name: string;
  host: string;
  accountId: string;
}

export const platforms: Platform[] = [
  {
    name: 'Codeforces',
    host: 'codeforces.com',
    accountId: '3380631',
  },
  {
    name: 'CodeChef',
    host: 'codechef.com',
    accountId: '3380958',
  },
  {
    name: 'LeetCode',
    host: 'leetcode.com',
    accountId: '7486400',
  },
  {
    name: 'GeeksforGeeks',
    host: 'geeksforgeeks.org',
    accountId: '5630303',
  },
]; 