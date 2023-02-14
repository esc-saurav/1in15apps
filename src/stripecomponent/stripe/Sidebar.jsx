import React from "react";
import { useGlobalContext } from "./Context";
import { FaTimes } from "react-icons/fa";
import sublinks from "./Data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar bg-white shadow-md rounded-md">
        <button onClick={closeSidebar} className="top-2 absolute right-2">
          <FaTimes className="h-6 w-5" />
        </button>
        <div className="flex flex-col gap-5 absolute top-10 bg-white">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index} className="flex flex-col gap-1 bg-white">
                <h4 className="font-bold text-sm bg-white">{page}</h4>
                <div className="grid grid-cols-2 gap-2 bg-white">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a
                        key={index}
                        href={url}
                        className="text-sm flex items-center gap-2 bg-white"
                      >
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
