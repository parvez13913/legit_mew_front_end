import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

interface InstagramPost {
  id: number;
  userName: string;
  userPhoto: string;
  image: string;
  description: string;
  likes: number;
  comments: number;
}

const posts: InstagramPost[] = [
  {
    id: 1,
    userName: "Jane Cooper",
    userPhoto: "/images/Image-5.png",
    image: "/images/InstagramPosts-1.png",
    description:
      "Lorem ipsum is a long, dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 245,
    comments: 32,
  },
  {
    id: 2,
    userName: "Floyd Miles",
    userPhoto: "/images/Image-6.png",
    image: "/images/InstagramPosts-2.png",
    description:
      "Lorem ipsum is a long, dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    likes: 189,
    comments: 24,
  },
];

export default function InstagramPosts() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-[#333] font-medium leading-[130%] text-[32px] mb-2.5">
          Instagram Posts
        </h2>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={post.userPhoto}
                alt={post.userName}
                height={100}
                width={100}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h6>{post.userName}</h6>
            </div>
            {/* Post Image */}
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Instagram post"
              height={400}
              width={400}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="mb-4 text-sm text-[#1D1F2C] leading-[140%] tracking-[0.07px]">
              {post.description}
            </p>
            {/* Engagement Metrics */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                <span className="text-sm text-muted-foreground">
                  {post.likes} likes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-blue-500 cursor-pointer transition-colors" />
                <span className="text-sm text-muted-foreground">
                  {post.comments} comments
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
