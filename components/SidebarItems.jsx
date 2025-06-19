"use client";
import { SidebarItem } from "@components/Sidebar";
import {
  Book,
  BookMarked,
  CheckSquare,
  GraduationCap,
  LayoutDashboard,
  List,
  MessageCircle,
  PlusIcon,
  Receipt,
  SettingsIcon,
} from "lucide-react";
import { useContext, useState } from "react";

export default function SidebarItems() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <div className="flex lg:flex-col w-full justify-between">
        <div>
          <SidebarItem
            route="/admin"
            icon={<LayoutDashboard size={20} />}
            alert
            text="Dashboard"
            id="Dashboard"
            activeItem={false}
            setActiveItem={false}
          />
        </div>

        <div className="relative">
          <SidebarItem
            handleClick
            icon={<GraduationCap size={20} />}
            id="Students"
            text="students"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        <div className="relative">
          <SidebarItem
            key={2}
            handleClick
            icon={<Book size={20} />}
            id="Teacher"
            text="teacher"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>

        <div>
          <SidebarItem
            route="/admin/finance"
            icon={<Receipt size={20} />}
            alert
            text="Finance"
            id="Finance"
          />
        </div>

        <div>
          <SidebarItem
            route="/admin/results"
            icon={<BookMarked size={20} />}
            text="Results"
            id="Results"
          />
        </div>

        <div>
          <SidebarItem
            route="/admin/attendance"
            icon={<CheckSquare size={20} />}
            id="Attendance"
            text="Attendance"
          />
        </div>

        <div>
          <SidebarItem
            route="/admin/message"
            icon={<MessageCircle size={20} />}
            id="Message"
            text="Message"
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
        />
      </div>
    </>
  );
}
