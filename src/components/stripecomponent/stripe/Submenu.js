import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${
        isSubmenuOpen ? "submenu show " : "submenu"
      } mt-2 rounded-md w-[25%]`}
      ref={container}
    >
      <div className="animation flex flex-col  gap-3 bg-white ">
        <h4 className="bg-white font-bold">{page}</h4>
        <div className="grid grid-cols-2 gap-8 bg-white  ">
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a
                key={index}
                href={url}
                className="flex  items-center gap-2 text-slate-700 bg-white font-medium "
              >
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Submenu;
