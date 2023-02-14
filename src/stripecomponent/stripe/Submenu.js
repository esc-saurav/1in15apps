import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";

const Submenu = () => {
  const { isSubmenuOpen, location, ref} = useGlobalContext();
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
      } mt-2 rounded-md ` }
      ref={container}
    >
      <div className="animation" ref={ref}>Submenu</div>
    </aside>
  );
};

export default Submenu;
