import React from 'react';
import { Search, Video, MoreHorizontal } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className="w-[360px] h-[calc(100vh-56px)] overflow-y-auto fixed right-0 top-[56px] p-4 hidden lg:block">
      <div className="mb-4">
        <h2 className="text-gray-500 font-semibold mb-2">Sponsored</h2>
        <SponsoredItem
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop"
          title="Nike Running Shoes"
          description="Get 20% off on all running shoes"
        />
      </div>

      <div className="border-t border-gray-300 pt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-500 font-semibold">Contacts</h2>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Video className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Search className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Contact
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
            name="Sarah Wilson"
            active
          />
          <Contact
            image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop"
            name="Mike Johnson"
          />
          <Contact
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop"
            name="Emily Davis"
            active
          />
        </div>
      </div>
    </div>
  );
}

function SponsoredItem({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <a href="#" className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-100">
      <img src={image} alt={title} className="w-[100px] h-[100px] rounded-lg object-cover" />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </a>
  );
}

function Contact({ image, name, active }: { image: string; name: string; active?: boolean }) {
  return (
    <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100">
      <div className="relative">
        <img src={image} alt={name} className="w-8 h-8 rounded-full" />
        {active && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        )}
      </div>
      <span className="font-medium">{name}</span>
    </button>
  );
}