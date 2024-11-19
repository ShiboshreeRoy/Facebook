import React from 'react';
import { Users, UserCircle, Bookmark, Calendar, Clock, ChevronDown } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-[360px] h-[calc(100vh-56px)] overflow-y-auto fixed left-0 top-[56px] p-4 hidden lg:block">
      <div className="space-y-1">
        <SidebarItem
          icon={<img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />}
          text="John Doe"
        />
        <SidebarItem icon={<Users className="h-8 w-8 text-blue-500" />} text="Friends" />
        <SidebarItem icon={<UserCircle className="h-8 w-8 text-blue-500" />} text="Groups" />
        <SidebarItem icon={<Bookmark className="h-8 w-8 text-purple-500" />} text="Saved" />
        <SidebarItem icon={<Calendar className="h-8 w-8 text-blue-500" />} text="Events" />
        <SidebarItem icon={<Clock className="h-8 w-8 text-blue-500" />} text="Memories" />
        
        <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-200">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <ChevronDown className="h-5 w-5 text-black" />
          </div>
          <span className="text-sm font-medium">See more</span>
        </button>
      </div>

      <div className="border-t border-gray-300 mt-4 pt-4">
        <h3 className="text-gray-500 font-semibold mb-2">Your shortcuts</h3>
        <ShortcutItem
          image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=40&h=40&fit=crop"
          text="Gaming Group"
        />
        <ShortcutItem
          image="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=40&h=40&fit=crop"
          text="Tech Community"
        />
      </div>
    </div>
  );
}

function SidebarItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-200">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}

function ShortcutItem({ image, text }: { image: string; text: string }) {
  return (
    <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-200">
      <img src={image} alt={text} className="w-8 h-8 rounded-lg object-cover" />
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}