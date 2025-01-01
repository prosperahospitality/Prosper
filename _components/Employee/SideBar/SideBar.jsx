"use client";
import React, { useState } from "react";
import IMAGES from "@/public/index";
import Link from "next/link";
import {
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import BookingsDropDown from "@/_components/Employee/BookingsDropDown";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <aside
        className={`flex overflow-y-auto flex-col px-5 py-4 h-screen bg-black ${
          isOpen ? "" : "w-[60%] lg:w-16"
        }`}
      >
        <Link className="flex justify-between items-center" href="">
          <img src={IMAGES.logowithoutbg} size={60} className="mb-8 w-[90%]"/>
          <div className="flex justify-end text-white">
            {isOpen ? (
              <>
                <PanelLeftClose className="m-4" onClick={toggleSidebar} />
              </>
            ) : (
              <>
                <div className="flex flex-col">
                  <img src={IMAGES.logowithoutbg} size={80} className="pr-4" />
                  <PanelLeftOpen
                    className="mt-[0px] lg:mt-2 ml-2 lg:ml-24 absolute z-50 text-black"
                    onClick={toggleSidebar}
                  />
                </div>
              </>
            )}
          </div>
        </Link>

        <div className="mt-2 flex flex-1 flex-col">
          <nav className="-mx-3 space-y-6">
            <div className={`${isOpen ? "space-y-3" : ""}`} >
              <label
                className={`${
                  isOpen ? "px-3" : ""
                } text-xs font-semibold uppercase text-foreground-300`}
              >
                {isOpen ? "Excel Reports" : ""}
              </label>
              <BookingsDropDown isOpen={isOpen} toggleSidebar={toggleSidebar} />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;









