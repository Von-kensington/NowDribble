export interface Post {
  id: number;
  title: string;
  content: string;
  profileImageURL: string;
  image_url?: string;
  name: string;
}

export const mockPosts: Post[] = [
    {
      id: 1,
      title: "Welcome to NowDribble!",
      content: "Join us in improving your basketball skills every day.",
      profileImageURL: "https://i.pravatar.cc/100?img=1",
      image_url: "https://picsum.photos/400/300?random=11",
      name: "Coach Cook",
    },
    {
      id: 2,
      title: "Dribbling Tips",
      content: "Practice dribbling with both hands to improve ball control.",
      profileImageURL: "https://i.pravatar.cc/100?img=2",
      image_url: "https://picsum.photos/400/300?random=12",
      name: "Antonio",
    },
    {
      id: 3,
      title: "Shooting Techniques",
      content: "Focus on your follow-through and balance for a perfect shot.",
      profileImageURL: "https://i.pravatar.cc/100?img=3",
      image_url: "https://picsum.photos/400/300?random=13",
      name: "Lisa Thompson",
    },
    {
      id: 4,
      title: "Strength Training for Basketball",
      content: "Build lower body strength to improve your vertical jump.",
      profileImageURL: "https://i.pravatar.cc/100?img=4",
      image_url: "https://picsum.photos/400/300?random=14",
      name: "Jordan Smith",
    },
    {
      id: 5,
      title: "Defensive Strategies",
      content: "Always stay low and keep your hands active on defense.",
      profileImageURL: "https://i.pravatar.cc/100?img=5",
      image_url: "https://picsum.photos/400/300?random=15",
      name: "Chris Davis",
    },
    {
      id: 6,
      title: "Fast Break Execution",
      content: "Push the ball up the court quickly and look for open teammates.",
      profileImageURL: "https://i.pravatar.cc/100?img=6",
      image_url: "https://picsum.photos/400/300?random=16",
      name: "Sophia Martinez",
    },
    {
      id: 7,
      title: "Improving Free Throws",
      content: "Develop a consistent routine and follow through smoothly.",
      profileImageURL: "https://i.pravatar.cc/100?img=7",
      image_url: "https://picsum.photos/400/300?random=17",
      name: "Daniel Peterson",
    },
    {
      id: 8,
      title: "Conditioning Workouts",
      content: "Use sprint drills to increase your endurance on the court.",
      profileImageURL: "https://i.pravatar.cc/100?img=8",
      image_url: "https://picsum.photos/400/300?random=18",
      name: "Megan Carter",
    },
    {
      id: 9,
      title: "Teamwork and Communication",
      content: "Talk to your teammates on defense and make smart passes.",
      profileImageURL: "https://i.pravatar.cc/100?img=9",
      image_url: "https://picsum.photos/400/300?random=19",
      name: "Ethan Roberts",
    },
    {
      id: 10,
      title: "Becoming a Playmaker",
      content: "Learn how to read defenses and make the right plays.",
      profileImageURL: "https://i.pravatar.cc/100?img=10",
      image_url: "https://picsum.photos/400/300?random=20",
      name: "Michael Anderson",
    },
  ];