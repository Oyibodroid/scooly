// "use client"

import "@styles/globals.css";
import Topbar from "@components/Topbar";
import SidebarItems from "@components/SidebarItems";
import Sidebar from "@components/Sidebar";
import PageLoader from "@components/PageLoader";

export const metadata = {
  title: "Scooly",
  description: "Experiencing a cool scool management flow",
};

const RootLayout = ({ children }) => {
  return (
      <main>
        <section className="">
          <Sidebar>
            <SidebarItems />
          </Sidebar>

          <div className="lg:ml-6">
            <PageLoader />
            <Topbar />
            <div>{children}</div>
          </div>
        </section>
      </main>
  );
};

export default RootLayout;
