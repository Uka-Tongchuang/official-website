"use client";

// external libraries
import React, { useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// media import
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MenuLogo from "../assets/menuLogo.png";
import Image from "next/image";

type ActiveListItem = {
  pageTitle: string;
  path: string;
  id: string;
};

export default function Menu(): JSX.Element {
  const menu = [
    {
      pageTitle: "产品服务",
      subItem: [
        {
          pageTitle: "人事派遣",
          path: "/products/personnel-dispatch",
          id: "personnel",
        },
        {
          pageTitle: "劳务派遣",
          path: "/products/labor-dispatch",
          id: "labor",
        },
        {
          pageTitle: "岗位外包",
          path: "/products/position-outsource",
          id: "position",
        },
        {
          pageTitle: "业务外包",
          path: "/products/business-outsource",
          id: "business",
        },
        {
          pageTitle: "招聘流程外包",
          path: "/products/recruitment",
          id: "recruitment",
        },
        {
          pageTitle: "灵活用工解决方案",
          path: "/products/flexible-outsource",
          id: "flexible",
        },
      ],
      path: "",
      id: "products",
    },
    {
      pageTitle: "客户案例",
      subItem: null,
      path: "/customer-case",
      id: "customerCase",
    },
    { pageTitle: "公司新闻", subItem: null, path: "/news", id: "news" },
    {
      pageTitle: "关于今创",
      subItem: null,
      path: "/about-us",
      id: "aboutUs",
    },
  ];

  const useMediaQuery = (width: number): boolean => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: MediaQueryListEvent) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener("change", updateTarget);
    }, []);

    return targetReached;
  };

  const currentPath = usePathname();
  const isBreakpoint = useMediaQuery(980);
  const [expanded, setExpanded] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [activeList, setActiveList] = useState<ActiveListItem[]>([]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const menuElement = document.getElementById("menuItems");
      if (menuElement != null && !menuElement.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return (): void => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileOpen]);

  const renderSubItem = (
    subItem: { pageTitle: string; path: string; id: string }[]
  ): JSX.Element => {
    if (expanded) {
      return (
        <div className="border-y border-gray-200 w-screen bg-white">
          <ul className="flex flex-row w-full justify-between">
            {subItem.map((item, index) => (
              <li key={index}>
                <a href={item.path} id={item.id}>
                  <button
                    className={`h-full px-5 py-2 hover:text-azul ${
                      currentPath === item.path
                        ? "border-b-2 border-azul"
                        : "border-none"
                    }`}
                  >
                    {item.pageTitle}
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <></>;
  };

  const renderMobileDropdown = (
    subItem: { pageTitle: string; path: string; id: string }[]
  ): JSX.Element => {
    return (
      <div className="flex flex-col border-y w-full border-gray-200 bg-white">
        {subItem.map((item, index) => (
          <a
            href={item.path}
            id={item.id}
            key={index}
            className={`w-full flex px-4 py-4 ${
              currentPath === item.path
                ? "bg-azul/40 text-white"
                : "bg-white text-black"
            }`}
          >
            {item.pageTitle}
          </a>
        ))}
      </div>
    );
  };

  const expandOnClick = (
    items: { pageTitle: string; id: string; path: string }[]
  ): void => {
    setExpanded(!expanded);
    if (!expanded) {
      setActiveList([...activeList, ...items]);
    } else {
      setActiveList([]);
    }
  };

  const toggleMenu = (): void => {
    setMobileOpen(!isMobileOpen);
  };

  const renderHamburger = (): JSX.Element => {
    return (
      <button
        onClick={() => toggleMenu()}
        className="z-30 px-4 flex items-center"
        id="Hamburger-Menu"
        aria-label="Hamburger-Menu-Button"
      >
        {isMobileOpen ? (
          // X icon for closing menu
          <svg
            className="h-4 w-8"
            fill="#000"
            viewBox="0 0 16 16"
            stroke="#000"
          >
            <line x1="0" y1="16" x2="16" y2="0" stroke="#000" strokeWidth="2" />
            <line x1="0" y1="0" x2="16" y2="16" stroke="#000" strokeWidth="2" />
          </svg>
        ) : (
          // Hamburger icon for opening menu
          <svg
            className="h-6 w-6"
            fill="#000"
            stroke="#000"
            viewBox="0 0 100 80"
            width="20"
            height="20"
          >
            <rect width="100" height="5" rx="10" />
            <rect y="30" width="100" height="5" rx="10" />
            <rect y="60" width="100" height="5" rx="10" />
          </svg>
        )}
      </button>
    );
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="w-screen top-0">
      {isMobileOpen && (
        <div
          //黑色背景
          className="fixed inset-0 bg-black/50 z-40"
          //模糊度
          style={{
            backdropFilter: "blur(1px)",
          }}
        ></div>
      )}

      {!isBreakpoint ? (
        <div className="w-full flex flex-col fixed top-0 z-50 h-[140px] pb-6">
          <div className="flex flex-row pt-8 px-10 items-center h-[70px] bg-white">
            <div className="h-full flex items-center">
              <a href="/" id="HomePage">
                <Image
                  src={MenuLogo}
                  alt="今创人力有限公司"
                  width={100}
                  height={300}
                />
              </a>
            </div>
            <div className="flex flex-row">
              {menu.map((menuItem, index) => (
                <div key={index} className="h-full px-3">
                  {menuItem.subItem ? (
                    <button
                      className={`inline-flex w-full justify-center items-center h-full px-5 py-2 hover:text-azul ${
                        expanded ? "bg-azul/50 text-white" : "bg-transparent"
                      }`}
                      onClick={() => {
                        expandOnClick(menuItem.subItem);
                      }}
                    >
                      {menuItem.pageTitle}
                      {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>
                  ) : (
                    <a href={menuItem.path} id={menuItem.id}>
                      <button
                        className={`h-full px-5 py-2 border-b-2 hover:text-azul ${
                          currentPath === menuItem.path
                            ? "border-azul"
                            : "border-white"
                        }`}
                      >
                        {menuItem.pageTitle}
                      </button>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          {renderSubItem(activeList)}
        </div>
      ) : (
        <div className="fixed top-0 w-full z-40 bg-white">
          <div
            className={`flex flex-row w-full h-[70px] pt-8 ${
              isMobileOpen ? "z-10" : "z-50"
            }`}
            id="menuContainer"
          >
            <div className="flex basis-1/2 justify-start px-4 items-center">
              <a href="/" id="HomePage">
                <Image
                  src={MenuLogo}
                  alt="今创人力有限公司"
                  width={100}
                  height={300}
                />
              </a>
            </div>
            <div className="flex basis-1/2 justify-end">
              {renderHamburger()}
            </div>
          </div>
          <div className="w-full top-0 fixed">
            <motion.div
              id="menu"
              initial="hidden"
              animate={isMobileOpen ? "visible" : "hidden"}
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.3 }}
              className={`${
                isMobileOpen ? "flex z-50" : "hidden z-0"
              } flex-row md:flex-row-reverse`}
              style={{
                transition: "all 300ms ease-out allow-discrete",
              }}
            >
              <div
                className="flex flex-col w-full basis-full md:basis-1/2 h-screen"
                id="menuItems"
              >
                <div
                  className={`bg-white ${
                    isMobileOpen ? "flex" : "hidden"
                  } flex-col items-start mt-[70px] w-full`}
                >
                  {menu.map((menuItem, index) => (
                    <div key={index} className="w-full">
                      {menuItem.subItem ? (
                        <motion.div className="w-full" initial={false}>
                          <button
                            className={`inline-flex w-full  items-center h-full px-4 py-4 ${
                              expanded
                                ? "bg-azul/50 text-white"
                                : "bg-transparent"
                            }`}
                            style={{
                              transition:
                                "background-color 100ms ease-in-out, opacity 300ms ease-in-out",
                            }}
                            onClick={() => {
                              expandOnClick(menuItem.subItem);
                            }}
                          >
                            {menuItem.pageTitle}
                            {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                          </button>
                          <AnimatePresence initial={false}>
                            {expanded && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                  transition: {
                                    duration: 0.3,
                                  },
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                  transition: {
                                    duration: 0.3,
                                  },
                                }}
                              >
                                {renderMobileDropdown(menuItem.subItem)}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ) : (
                        <a
                          href={menuItem.path}
                          className={`w-full flex px-4 py-4 ${
                            currentPath === menuItem.path
                              ? "bg-azul/40 text-white"
                              : "bg-white text-black"
                          }`}
                          id={menuItem.id}
                        >
                          {menuItem.pageTitle}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="basis-0 md:basis-1/2 h-screen bg-black/30" />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
