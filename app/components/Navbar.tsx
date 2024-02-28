"use client";

import React, { useEffect, useRef, useState } from "react";
import { DropdownPage } from "./Dropdown";
import Image from "next/image";

export default function HamburgerMenuPage({
  personalOptions,
  commissionedOptions,
  folkloricoOptions,
}: {
  personalOptions: any[];
  commissionedOptions: any[];
  folkloricoOptions: any[];
}) {
  const [open, setOpen] = useState(false);
  const [menuOption, setMenuOption] = useState("");

  const toggle = () => {
    setOpen((prevState) => !prevState);
    setMenuOption("");
  };

  return (
    <HamburgerMenu bgColor="bg-white" textColor="text-black">
      <div className="flex justify-between items-center py-4 px-4 m-auto max-w-[1300px]">
        <HamburgerMenuBrand href="/">
          <h1>JORGE</h1>
        </HamburgerMenuBrand>
        <div className="md:hidden">
          <HamburgerMenuToggler toggle={toggle} />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-10 py-1 px-4 text-primary text-sm font-medium ">
            <li>
              <DropdownPage title="Personal" options={personalOptions} />
            </li>
            <li>
              <DropdownPage
                title="Commissioned"
                options={commissionedOptions}
              />
            </li>
            <li>
              <DropdownPage title="Folklorico" options={folkloricoOptions} />
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline duration-150 ease-in-out underline-offset-8"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div className=" hidden md:block ">
          <a
            href="https://www.instagram.com/ist.osorio/"
            className="inline-block "
          >
            <Image
              src="/instagram.svg"
              priority
              width={30}
              height={30}
              alt="Instagram logo"
              className="py-3 w-8 mx-3"
            />
          </a>
          <a href="" className="inline-block ">
            <Image
              src="/youtube.svg"
              priority
              width={30}
              height={30}
              alt="Instagram logo"
              className="py-3 w-8 mx-3 "
            />
          </a>
        </div>
      </div>

      <div className="md:hidden">
        <HamburgerMenuCollapse open={open}>
          <HamburgerMenuNav toggle={toggle}>
            {menuOption === "" ? (
              <div className="">
                <HamburgerMenuItem>
                  <HamburgerSubMenu
                    option="personal"
                    setMenuOption={setMenuOption}
                  >
                    Personal
                  </HamburgerSubMenu>
                </HamburgerMenuItem>
                <HamburgerMenuItem>
                  <HamburgerSubMenu
                    option="commissioned"
                    setMenuOption={setMenuOption}
                  >
                    Commissioned
                  </HamburgerSubMenu>
                </HamburgerMenuItem>
                <HamburgerMenuItem>
                  <HamburgerSubMenu
                    option="folklorico"
                    setMenuOption={setMenuOption}
                  >
                    Folklorico
                  </HamburgerSubMenu>
                </HamburgerMenuItem>
                <HamburgerMenuItem>
                  <HamburgerMenuLink href="/about">About</HamburgerMenuLink>
                </HamburgerMenuItem>
              </div>
            ) : menuOption == "personal" ? (
              <div className="">
                {personalOptions.map((option, index) => (
                  <HamburgerMenuItem key={index}>
                    <HamburgerMenuLink href={`/series/${option.slug.current}`}>
                      {option.title}
                    </HamburgerMenuLink>
                  </HamburgerMenuItem>
                ))}
              </div>
            ) : menuOption == "commissioned" ? (
              <div className="">
                {commissionedOptions.map((option, index) => (
                  <HamburgerMenuItem key={index}>
                    <HamburgerMenuLink href={`/series/${option.slug.current}`}>
                      {option.title}
                    </HamburgerMenuLink>
                  </HamburgerMenuItem>
                ))}
              </div>
            ) : (
              <div className="">
                {folkloricoOptions.map((option, index) => (
                  <HamburgerMenuItem key={index}>
                    <HamburgerMenuLink href={`/series/${option.slug.current}`}>
                      {option.title}
                    </HamburgerMenuLink>
                  </HamburgerMenuItem>
                ))}
              </div>
            )}
          </HamburgerMenuNav>
        </HamburgerMenuCollapse>
      </div>
    </HamburgerMenu>
  );
}

/* Logic */

const style = {
  nav: `block pl-0 mb-0 `,
  navbar: `font-light shadow fixed top-0 w-full z-50 border-b-2 border-black`,
  collapse: `transition-height ease duration-300 text-primary `,
  toggler: `float-right pt-1.5 text-3xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer py-3 px-4 hover:text-gray-400 font-medium`,
  brand: `inline-block   mr-4 cursor-pointer text-2xl font-medium whitespace-nowrap hover:text-gray-700`,
};

function HamburgerMenu({ children, bgColor, textColor }: any) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuBrand({ children, href }: any) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}

function HamburgerMenuToggler({ toggle }: any) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler + ` text-black `}
      onClick={() => toggle()}
    >
      <Image
        src="/menu.svg"
        width={40}
        height={40}
        alt="Instagram logo"
        className="py-3 w-8 mx-3 "
      />
    </button>
  );
}

function HamburgerMenuCollapse({ children, open }: any) {
  const [ref, setRef]: any = useState();
  const [height, setHeight]: any = useState(ref?.scrollHeight);
  let inlineStyle = open
    ? { height: height, overflow: "hidden" }
    : { height: 0, opacity: 0, overflow: "hidden" };

  return (
    <div
      className={style.collapse}
      style={inlineStyle}
      ref={(newRef) => setRef(newRef)}
      onClick={() => {}}
    >
      {children}
    </div>
  );
}

function HamburgerMenuNav({ children, toggle }: any) {
  return <ul className={style.nav}>{children}</ul>;
}

function HamburgerMenuItem({ children }: any) {
  return <li>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuLink({ children, href }: any) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerSubMenu({ children, option, setMenuOption }: any) {
  return (
    <div
      className={style.link}
      onClick={() => {
        setMenuOption(option);
      }}
    >
      {children}
    </div>
  );
}
