"use client";

import React from "react";

export const DropdownPage = ({
  title,
  type,
  options,
}: {
  title: string;
  type: string;
  options: any[];
}) => (
  <Dropdown>
    <DropdownToggle>
      <span className="hover:underline duration-150 ease-in-out pb-2 underline-offset-8">
        {title}
      </span>
    </DropdownToggle>
    <DropdownMenu>
      {!options[0] && (
        <p className="block w-full py-2 px-8  text-sm font-bold whitespace-nowrap">
          No Series Yet
        </p>
      )}
      {options &&
        options.map((single, index) => (
          <DropdownItem link={single.slug.current} type={type} key={index}>
            {single.title}
          </DropdownItem>
        ))}
    </DropdownMenu>
  </Dropdown>
);

/* Logic*/

function useToggle() {
  const [show, setShow] = React.useState(false);
  const ref: any = React.useRef(null);

  const toggle = React.useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  return {
    show,
    toggle,
    ref,
  };
}

const style = {
  item: `block w-full py-2 px-8  text-sm font-normal clear-both whitespace-nowrap border-0 hover:bg-gray-300 cursor-pointer`,
  menu: `block z-30 absolute bg-white float-left py-2 px-0 text-left border border-gray-300 rounded-sm mt-1 mb-0 mx-0 bg-clip-padding`,
};

function Dropdown({ children }: any) {
  const { show, toggle } = useToggle();
  /* First child contains the dropdown toggle */
  const dropdownToggle = children[0];

  /* Second child contains the dropdown menu */
  const dropdownMenu = children[1];

  return (
    <div
      className=""
      onMouseEnter={() => toggle()}
      onMouseLeave={() => toggle()}
    >
      <button
        className="focus:outline-none m-0 p-0"
        type="button"
        id="options-menu"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {dropdownToggle}
      </button>
      {show && <>{dropdownMenu}</>}
    </div>
  );
}

function DropdownToggle({ children }: any) {
  return <>{children}</>;
}

function DropdownMenu({ children }: any) {
  return (
    <div className="relative">
      <div
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
        className={style.menu}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {children}
      </div>
    </div>
  );
}

/* You can wrap the a tag with Link and pass href prop to Link if you are using either Create-React-App, Next.js or Gatsby */
function DropdownItem({ children, type, link }: any) {
  return (
    <a
      tabIndex={0}
      href={`/${type}/${link}`}
      className={style.item}
      role="menuitem"
    >
      {children}
    </a>
  );
}
