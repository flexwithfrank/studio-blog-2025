"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Navbar(props) {
  const pricingClick = () => {
    window.open("https://studio3fit.com/pricing", "_blank");
  };

  const offersClick = () => {
    window.open("https://studio3fit.com/offers", "_blank");
  };

  const leftmenu = [
    {
      label: "Back to Studio3",
      href: "#",
      children: [
        { title: "Home Default", path: "/" },
        { title: "Home Alternate", path: "/home/alt" },
        { title: "Home Minimal", path: "/home/minimal" },
        { title: "Home Lifestyle", path: "/home/lifestyle" },
        { title: "Home Two Column", path: "/home/2-col" }
      ]
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  const rightmenu = [
    {
      label: "Pages",
      href: "#",
      children: [
        {
          title: "Category Page",
          path: "/category/personal-growth"
        },
        {
          title: "Author Page",
          path: "/author/mario-sanchez"
        },
        {
          title: "Search Page",
          path: "/search?q=life"
        },
        { title: "Archive - Pagination", path: "/archive" },
        {
          title: "Single Post - Default",
          path: "/post/10-simple-practices-that-will-help-you-get-1-better-every-day"
        },
        {
          title: "Single Post - Minimal",
          path: "/post/minimal/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"
        },
        {
          title: "Single Post - Lifestyle",
          path: "/post/lifestyle/there-s-nothing-new-about-undermining-women-s-autonomy"
        },
        {
          title: "Single Post - Sidebar",
          path: "/post/sidebar/lessons-of-happiness-i-learned-from-a-mountain-village"
        }
      ]
    },
    {
      label: "Free Version",
      href: "https://stablo.web3templates.com/",
      external: true
    },
    {
      label: "Purchase",
      href: "https://web3templates.com/templates/stablo-minimal-blog-website-template",
      external: true
    }
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="haas-medium flex flex-wrap justify-start md:flex-nowrap md:gap-10">
                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-start">
                  <button
                    type="button"
                    class="dark:text-whitefocus:outline-none haas-medium inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-black focus:ring-0 dark:text-white">
                    <svg
                      class="mr-2 h-3.5 w-3.5 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                    Back to Studio3
                  </button>
                </div>
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/" className="w-28 dark:hidden">
                    {props.logo ? (
                      <Image
                        {...urlForImage(props.logo)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        Studio3
                      </span>
                    )}
                  </Link>
                  <Link href="/" className="hidden w-28 dark:block">
                    {props.logoalt ? (
                      <Image
                        {...urlForImage(props.logoalt)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        Studio3
                      </span>
                    )}
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="order-2 hidden w-full flex-col items-center justify-end md:order-none md:flex md:w-auto md:flex-1 md:flex-row gap-3">
                  <button
                    onClick={offersClick}
                    type="button"
                    class="haas-medium inline-flex w-full items-center justify-center gap-x-2 rounded-full border-2 border-black bg-black px-6 py-2.5 text-sm font-medium text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-white dark:text-white sm:w-auto">
                    Trial
                  </button>
                  <button
                    onClick={pricingClick}
                    type="button"
                    class="text-md haas-medium inline-flex w-full items-center justify-center gap-x-2 rounded-full border-2 border-black bg-white px-6 py-2.5 font-medium text-black hover:bg-neutral-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-black sm:w-auto">
                    Join Now
                  </button>
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
