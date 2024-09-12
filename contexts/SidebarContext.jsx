"use client";

import {
  useRef, useState, useEffect,
  createContext, useContext,
  useCallback, useMemo
} from "react";

import PropTypes from "prop-types";

import useWindowSize from "@hooks/useWindowSize";

const SidebarContext = createContext();

export const useToggleSidebar = () => useContext(SidebarContext);

export function SidebarProvider({ children }) {
  const windowSize = useWindowSize();

  const sidebarRef = useRef(null);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = useCallback(() => {
    if (windowSize <= 1024 && !showSidebar && !isTransitioning) {
      setIsTransitioning(true)

      document.body.classList.add(
        "absolute",
        "w-full",
        "overflow-hidden"
      );

      setShowBackdrop(true);

      setShowSidebar(true);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [windowSize, showSidebar, isTransitioning]);

  const closeSidebar = useCallback(() => {
    if (windowSize <= 1024 && showSidebar && !isTransitioning) {
      setIsTransitioning(true);

      setShowSidebar(false);

      setTimeout(() => {
        setShowBackdrop(false);

        document.body.classList.remove(
          "absolute",
          "w-full",
          "overflow-hidden"
        )
      }, 300);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [windowSize, showSidebar, isTransitioning]);

  const handleClickOutside = useCallback((event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  }, [closeSidebar]);

  useEffect(() => {
    if (windowSize <= 1024 && showSidebar) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    } else {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )
    };
  }, [windowSize, showSidebar, handleClickOutside]);

  useEffect(() => {
    setShowSidebar(() => windowSize <= 1024 && showSidebar);
  }, [showSidebar, windowSize]);

  useEffect(() => {
    setShowBackdrop(() => windowSize <= 1024 && showBackdrop);
  }, [showBackdrop, windowSize]);

  useEffect(() => {
    if (windowSize >= 1024 && showSidebar) {
      document.body.classList.remove(
        "absolute",
        "w-full",
        "overflow-hidden"
      )
    }
  }, [showSidebar, windowSize]);

  const value = useMemo(() => ({
    sidebarRef, showSidebar, setShowSidebar,
    showBackdrop, setShowBackdrop,
    openSidebar, closeSidebar,
  }), [
    sidebarRef, showSidebar, setShowSidebar,
    showBackdrop, setShowBackdrop,
    openSidebar, closeSidebar,
  ]);

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired
};
