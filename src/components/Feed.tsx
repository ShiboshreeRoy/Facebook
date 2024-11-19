import React from 'react';
import { Image, Video, Smile, MoreHorizontal, ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';

export default function Feed() {
  return (
    <div className="max-w-[680px] mx-auto pt-[72px] pb-8 px-4">
      <CreatePost />
      <div className="space-y-4 mt-4">
        <Post
          user={{
            name: "Sarah Wilson",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
            timeAgo: "2h"
          }}
          content="Just finished my morning hike! The view was absolutely breathtaking 🏔️"
          image="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=800&fit=crop"
          likes={234}
          comments={45}
          shares={12}
        />
        <Post
          user={{
            name: "Mike Johnson",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop",
            timeAgo: "5h"
          }}
          content="Just launched our new product! Check it out and let me know what you think 🚀"
          likes={567}
          comments={89}
          shares={34}
        />
      </div>
    </div>
  );
}

function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex space-x-4">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 flex-1 text-left text-gray-500">
          What's on your mind, John?
        </button>
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex justify-between">
          <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
            <Video className="w-6 h-6 text-red-500" />
            <span className="font-medium text-gray-500">Live Video</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
            <Image className="w-6 h-6 text-green-500" />
            <span className="font-medium text-gray-500">Photo/Video</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
            <Smile className="w-6 h-6 text-yellow-500" />
            <span className="font-medium text-gray-500">Feeling/Activity</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Post({ user, content, image, likes, comments, shares }: {
  user: { name: string; image: string; timeAgo: string };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex space-x-2">
            <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-gray-500 text-sm">{user.timeAgo}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <p className="mt-3">{content}</p>
      </div>
      
      {image && (
        <div className="relative">
          <img src={image} alt="Post" className="w-full" />
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between text-gray-500 text-sm mb-3">
          <span>{likes} Likes</span>
          <div className="space-x-2">
            <span>{comments} Comments</span>
            <span>{shares} Shares</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between">
            <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <ThumbsUp className="w-5 h-5" />
              <span className="font-medium">Like</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Comment</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <Share2 className="w-5 h-5" />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}