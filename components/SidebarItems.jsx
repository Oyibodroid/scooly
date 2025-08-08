"use client";

import { SidebarItem } from "@components/Sidebar";
import {
  Book,
  BookMarked,
  CheckSquare,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  Receipt,
  SettingsIcon,
} from "lucide-react";
import { useState } from "react";

export default function SidebarItems() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <div className="flex lg:flex-col w-full justify-between">
        {/* Dashboard */}
        <div>
          <SidebarItem
            route="/admin"
            icon={<LayoutDashboard size={20} />}
            alert
            text="Dashboard"
            id="Dashboard"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        {/* Students with dropdown */}
        <div className="relative">
          <SidebarItem
            icon={<GraduationCap size={20} />}
            id="Students"
            text="students"
            hasDropdown
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        {/* Teacher with dropdown */}
        <div className="relative">
          <SidebarItem
            icon={<Book size={20} />}
            id="Teacher"
            text="teacher"
            hasDropdown
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        {/* Finance */}
        <div>
          <SidebarItem
            route="/admin/finance"
            icon={<Receipt size={20} />}
            alert
            text="Finance"
            id="Finance"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        {/* Results */}
        <div>
          <SidebarItem
            route="/admin/results"
            icon={<BookMarked size={20} />}
            text="Results"
            id="Results"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        {/* Attendance */}
        <div>
          <SidebarItem
            route="/admin/attendance"
            icon={<CheckSquare size={20} />}
            id="Attendance"
            text="Attendance"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        {/* Messages */}
        <div>
          <SidebarItem
            route="/admin/message"
            icon={<MessageCircle size={20} />}
            id="Message"
            text="Message"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      </div>

      <div>
        <hr />
        <SidebarItem
          icon={<SettingsIcon size={20} />}
          text="Settings"
          id="Settings"
          route="/admin/settings"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </>
  );
}
