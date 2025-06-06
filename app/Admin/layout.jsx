// "use client"

import "@styles/globals.css";
import Topbar from "@components/Topbar";
import SidebarItems from "@components/SidebarItems";
import Sidebar from "@components/Sidebar";

export const metadata = {
  title: "Scooly",
  description: "Experiencing a cool scool management flow",
};

const RootLayout = ({ children }) => {
  
  return (
    <html lang="en">
      <body className="font-sans bg-slate-100">
        <main className="">
          <Sidebar>
            <SidebarItems/>
          </Sidebar>

          <div className="lg:ml-6">
            <Topbar />
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
