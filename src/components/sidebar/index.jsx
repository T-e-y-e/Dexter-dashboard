"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform">
      <div className="h-full w-full px-10 py-4 bg-[#3A5743]">
        <div className="mb-16 mt-6">
          <Link href="/">
            <img src="./images/logo.png" alt="Logo" />
          </Link>
        </div>
        <ul className="space-y-4 font-medium">
          <li
            className={`text-[#CFCCD6] text-sm hover:text-[#FFBA49] ${
              pathname === "/" || pathname === "home" ? "text-[#FFBA49]" : ""
            } w-full`}>
            <Link href="/">
              <div className="flex items-center justify-start gap-3 p-2 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.25 12L11.2045 3.04551C11.6438 2.60617 12.3562 2.60617 12.7955 3.04551L21.75 12M4.5 9.75001V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5037 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5037 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.75001M8.25 21H16.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Home</span>
              </div>
            </Link>
          </li>
          <li
            className={`text-[#CFCCD6] text-sm hover:text-[#FFBA49] ${
              pathname === "/service-request" ? "text-[#FFBA49]" : ""
            } w-full`}>
            <Link href="/service-request">
              <div className="flex items-center justify-start gap-3 p-2 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9955 13.75H12.0045"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Service request</span>
              </div>
            </Link>
          </li>
          <li
            className={`text-[#CFCCD6] text-sm hover:text-[#FFBA49] ${
              pathname === "/vendors" ? "text-[#FFBA49]" : ""
            } w-full`}>
            <Link href="/vendors">
              <div className="flex items-center justify-start gap-3 p-2 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5948 10.9319C19.1972 10.9319 20.497 9.63295 20.497 8.03061C20.497 6.42828 19.1972 5.12936 17.5948 5.12936"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.9291 14.0847C19.4076 14.1177 19.8833 14.1856 20.3517 14.291C21.0026 14.4184 21.7854 14.6852 22.0641 15.2691C22.2419 15.6431 22.2419 16.0785 22.0641 16.4534C21.7863 17.0373 21.0026 17.3032 20.3517 17.437"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.28998 10.9319C4.68765 10.9319 3.38782 9.63295 3.38782 8.03061C3.38782 6.42828 4.68765 5.12936 6.28998 5.12936"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.95577 14.0847C4.47727 14.1177 4.00152 14.1856 3.5331 14.291C2.88227 14.4184 2.09943 14.6852 1.82168 15.2691C1.64293 15.6431 1.64293 16.0785 1.82168 16.4534C2.09852 17.0373 2.88227 17.3032 3.5331 17.437"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9377 14.7096C15.1846 14.7096 17.9584 15.2009 17.9584 17.1671C17.9584 19.1325 15.2029 19.6421 11.9377 19.6421C8.68997 19.6421 5.91705 19.1508 5.91705 17.1846C5.91705 15.2183 8.67255 14.7096 11.9377 14.7096Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9377 11.9049C9.79638 11.9049 8.07947 10.188 8.07947 8.04575C8.07947 5.90442 9.79638 4.1875 11.9377 4.1875C14.0791 4.1875 15.796 5.90442 15.796 8.04575C15.796 10.188 14.0791 11.9049 11.9377 11.9049Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Vendors</span>
              </div>
            </Link>
          </li>
          <li
            className={`text-[#CFCCD6] text-sm hover:text-[#FFBA49] ${
              pathname === "/users" ? "text-[#FFBA49]" : ""
            } w-full`}>
            <Link href="/users">
              <div className="flex items-center justify-start gap-3 p-2 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.592 13.957C12.851 13.957 17.184 14.324 17.184 17.499C17.184 20.8435 12.1351 21.0442 9.96941 21.0562L9.1831 21.0562C6.87394 21.0443 2 20.8447 2 17.519C2 14.1707 7.04889 13.9698 9.21459 13.9578L9.47479 13.957C9.51535 13.957 9.55444 13.957 9.592 13.957ZM9.592 15.457C6.813 15.457 3.5 15.814 3.5 17.519C3.5 18.871 5.55 19.557 9.592 19.557C13.634 19.557 15.684 18.864 15.684 17.499C15.684 16.144 13.634 15.457 9.592 15.457ZM18.7067 13.4899C21.4127 13.8949 21.9797 15.1479 21.9797 16.1269C21.9797 16.8559 21.6647 17.8429 20.1617 18.4119C20.0747 18.4449 19.9847 18.4609 19.8957 18.4609C19.5927 18.4609 19.3077 18.2759 19.1947 17.9769C19.0477 17.5899 19.2427 17.1559 19.6297 17.0099C20.4797 16.6879 20.4797 16.2949 20.4797 16.1269C20.4797 15.5599 19.8087 15.1719 18.4857 14.9749C18.0757 14.9129 17.7927 14.5309 17.8537 14.1219C17.9157 13.7119 18.3047 13.4369 18.7067 13.4899ZM9.592 2C12.423 2 14.7271 4.304 14.7271 7.135C14.733 8.499 14.204 9.787 13.24 10.757C12.278 11.728 10.993 12.265 9.626 12.27H9.592C6.76 12.27 4.456 9.966 4.456 7.135C4.456 4.304 6.76 2 9.592 2ZM16.6796 3.1238C18.6446 3.4458 20.0706 5.1268 20.0706 7.1198C20.0666 9.1248 18.5696 10.8468 16.5876 11.1248C16.5526 11.1298 16.5176 11.1318 16.4826 11.1318C16.1146 11.1318 15.7936 10.8608 15.7406 10.4858C15.6836 10.0758 15.9686 9.6958 16.3786 9.6388C17.6266 9.4638 18.5686 8.3808 18.5706 7.1188C18.5706 5.8648 17.6726 4.8068 16.4376 4.6048C16.0286 4.5368 15.7516 4.1518 15.8186 3.7428C15.8856 3.3338 16.2726 3.0588 16.6796 3.1238ZM9.592 3.5C7.587 3.5 5.956 5.131 5.956 7.135C5.956 9.139 7.587 10.77 9.592 10.77H9.623C10.587 10.766 11.495 10.387 12.176 9.7C12.858 9.015 13.231 8.104 13.227 7.138C13.227 5.131 11.596 3.5 9.592 3.5Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Users</span>
              </div>
            </Link>
          </li>
          <li
            className={`text-[#CFCCD6] text-sm hover:text-[#FFBA49] ${
              pathname === "/services" ? "text-[#FFBA49]" : ""
            } w-full`}>
            <Link href="/services">
              <div className="flex items-center justify-start gap-3 p-2 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 8H8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 11H6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 14H4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Services</span>
              </div>
            </Link>
          </li>
          <li
            className={`text-[#CFCCD6] hover:text-[#FFBA49] ${
              pathname === "/payments" ? "text-[#FFBA49]" : ""
            } w-full`}>
            <Link href="/payments">
              <div className="flex items-center justify-start gap-3 p-2 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 8H21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Payments</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
