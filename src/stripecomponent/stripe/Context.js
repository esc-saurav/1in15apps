import React, { useState, useContext } from "react";
import sublinks from "./Data";
import { useRef } from "react";
import ClickoutsideHook from "./ClickoutsideHook";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const ref = useRef();
  ClickoutsideHook(ref, () => setIsSubmenuOpen(false));

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        openSubmenu,
        closeSubmenu,
        closeSidebar,
        isSidebarOpen,
        isSubmenuOpen,
        location,
        ref,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
