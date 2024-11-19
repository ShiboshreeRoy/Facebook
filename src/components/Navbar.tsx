import React from 'react';
import { Search, Home, Users2, PlaySquare, Store, Bell, MessageCircle, Menu, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img src="/facebook.svg" alt="Facebook" className="h-10 w-10" />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-gray-100 rounded-full pl-10 pr-4 py-2 w-[240px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-center flex-1 gap-2">
          <NavButton icon={<Home className="h-6 w-6" />} active />
          <NavButton icon={<Users2 className="h-6 w-6" />} />
          <NavButton icon={<PlaySquare className="h-6 w-6" />} />
          <NavButton icon={<Store className="h-6 w-6" />} />
        </div>

        <div className="flex items-center gap-2">
          <IconButton icon={<Menu className="h-5 w-5" />} />
          <IconButton icon={<MessageCircle className="h-5 w-5" />} />
          <IconButton icon={<Bell className="h-5 w-5" />} />
          <button className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden hover:bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavButton({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`flex items-center justify-center p-2 h-12 px-10 rounded-lg hover:bg-gray-100 ${
        active ? 'border-b-4 border-blue-500' : ''
      }`}
    >
      <span className={active ? 'text-blue-500' : 'text-gray-500'}>{icon}</span>
    </button>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
      {icon}
    </button>
  );
}