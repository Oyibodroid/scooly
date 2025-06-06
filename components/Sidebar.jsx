"use client";

import Image from "@node_modules/next/image";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState } from "react";
import Button from "./Button";
import { usePathname } from "@node_modules/next/navigation";

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

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="lg:h-screen h-fit w-full lg:w-fit fixed bottom-0">
      <nav className="h-full flex lg:flex-col lg:border-r-white border-t-white/40 bg-white/10 backdrop-blur-sm border shadow-lg ">
        <div className="p-1 hidden pb-2 lg:flex justify-between items-center">
          <img
            src="/images/build.jpg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-11" : "w-0"
            }`}
            alt="img"
          />

          <Button onClick={() => setExpanded((curr) => !curr)}>
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </Button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex lg:flex-col w-full justify-between flex-1 lg:my-4 ">
            {children}
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

// // export default Sidebar;

// export function SidebarItem({ route, text, icon, handleClick, alert, dropped, id, activeItem, setActiveItem }) {
//   const { expanded } = useContext(SidebarContext);
//   const pathname = usePathname();
//   const isActive = pathname === route;

//   const [isOpen, setOpen] = useState(false);

//   function DropDown(itemId) {
//     setActiveItem((prev) => (prev === itemId ? null : itemId));
//     handleClick && setOpen((prev) => !prev);
//   }

//   const IsDropped = activeItem === id

//   return (
//     <div>
//       <a
//         href={route}
//         onClick={DropDown}
//         // key={NavItems.key}
//         className={`
//       relative group flex items-center
//       py-2 px-3 my-1 font-medium rounded-md
//       cursor-pointer transition-colors
//       ${
//         isActive
//           ? "bg-gradient-to-tr mr-0 mt-[-1rem] lg:mt-0 lg:mr-[-1rem] text-indigo-800 bg-white/10 backdrop-blur-md rounded-2xl border border-white/70 p-6 shadow-lg"
//           : "hover:border-white/40 hover:shadow-sm"
//       }
//       `}
//       >
//         <i className={`${isActive && ` stroke-indigo-500`}`}>{icon}</i>
//         <span
//           className={`overflow-hidden transition-all ${
//             expanded ? "w-52 ml-3" : "w-0"
//           }`}
//         >
//           {text}
//         </span>
//         {alert && (
//           <div
//             className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
//               expanded ? "" : "top-2"
//             }`}
//           ></div>
//         )}

//         {!expanded && (
//           <div
//             className={`
//            absolute top-[-70%] left-[-90%] lg:top-0 lg:left-full rounded-md px-2 py-1 font-bold
//            ml-6 bg-indigo-100 text-indigo-800 text-sm
//            invisible opacity-20 -translate-x-3 transition-all
//            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//            `}
//           >
//             {text}
//           </div>
//         )}
//       </a>

//       {isOpen && (
//         <div className="absolute -top-[180%] -left-0 lg:top-0 lg:left-full z-10 bg-white/50 border-white/80 shadow-lg backdrop-blur-sm rounded-full">
//           <SidebarItem
//             icon={<List size={20} />}
//             route={`/Admin/${text}`}
//             text="List"
//           />
//           <SidebarItem
//             icon={<PlusIcon size={20} />}
//             route={`/Admin/${text}/Add`}
//             text="Add"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

export function SidebarItem({
  route,
  text,
  icon,
  alert,
  dropped,
  id,
  activeItem,
  setActiveItem,
}) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();
  const isActive = pathname === route;

  const isOpen = activeItem === id;

  function handleClick(e) {
    setActiveItem((prev) => (prev === id ? null : id)); // Toggle open/close
  }

  return (
    <div>
      <a
        href={route}
        onClick={handleClick}
        className={`
          relative group flex items-center 
          py-2 px-3 my-1 font-medium rounded-md 
          cursor-pointer transition-colors
          ${
            isActive
              ? "bg-gradient-to-tr mr-0 mt-[-1rem] lg:mt-0 lg:mr-[-1rem] text-indigo-800 bg-white/10 backdrop-blur-md rounded-2xl border border-white/70 p-6 shadow-lg"
              : "hover:border-white/40 hover:shadow-sm"
          }
        `}
      >
        <i className={`${isActive && `stroke-indigo-500`}`}>{icon}</i>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>

        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          ></div>
        )}

        {!expanded && (
          <div
            className={`
              absolute top-[-70%] left-[-90%] lg:top-0 lg:left-full rounded-md px-2 py-1 font-bold
              ml-6 bg-indigo-100 text-indigo-800 text-sm 
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            {text}
          </div>
        )}
      </a>

      {isOpen && (
        <div className="absolute -top-[180%] -left-0 lg:top-0 lg:left-full z-10 bg-white/50 border-white/80 shadow-lg backdrop-blur-sm rounded-full">
          <SidebarItem
            icon={<List size={20} />}
            route={`/Admin/${text}/List`}
            text="List"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            id={`${id}-list`}
          />
          <SidebarItem
            icon={<PlusIcon size={20} />}
            route={`/Admin/${text}/Add`}
            text="Add"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            id={`${id}-add`}
          />
        </div>
      )}
    </div>
  );
}
