export const getRankInfo = (
  rating: number,
  platform: string
): { color: string; rankName: string } => {
  switch (platform) {
    case "Codeforces":
      if (rating >= 2400)
        return { color: "text-red-600", rankName: "Grandmaster" };
      if (rating >= 2100)
        return { color: "text-orange-500", rankName: "Master" };
      if (rating >= 1900)
        return { color: "text-violet-600", rankName: "Candidate Master" };
      if (rating >= 1600) return { color: "text-blue-600", rankName: "Expert" };
      if (rating >= 1400)
        return { color: "text-cyan-600", rankName: "Specialist" };
      if (rating >= 1200) return { color: "text-green-600", rankName: "Pupil" };
      return { color: "text-gray-600", rankName: "Newbie" };

    case "CodeChef":
      if (rating >= 2200) return { color: "text-red-600", rankName: "6★" };
      if (rating >= 2000) return { color: "text-yellow-500", rankName: "5★" };
      if (rating >= 1800) return { color: "text-purple-600", rankName: "4★" };
      if (rating >= 1600) return { color: "text-blue-600", rankName: "3★" };
      if (rating >= 1400) return { color: "text-green-600", rankName: "2★" };
      return { color: "text-gray-600", rankName: "1★" };

    case "LeetCode":
      if (rating >= 2150)
        return { color: "text-yellow-500", rankName: "Guardian" };
      if (rating >= 1850)
        return { color: "text-purple-600", rankName: "Knight" };
      return { color: "text-gray-600", rankName: "User" };

    case "GeeksforGeeks":
      if (rating >= 2200) return { color: "text-red-600", rankName: "6★" };
      if (rating >= 2000) return { color: "text-yellow-500", rankName: "5★" };
      if (rating >= 1800) return { color: "text-purple-600", rankName: "4★" };
      if (rating >= 1600) return { color: "text-blue-600", rankName: "3★" };
      if (rating >= 1400) return { color: "text-green-600", rankName: "2★" };
      return { color: "text-gray-600", rankName: "1★" };

    default:
      return { color: "text-gray-600", rankName: "User" };
  }
};
