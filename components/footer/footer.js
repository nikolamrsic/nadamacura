import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
  let router = useRouter();

  const linksStyle = {
    active: "text-white uppercase active hover:text-main-ciyan",
    nonActive: "text-white uppercase hover:text-main-ciyan",
  };

  return (
    <footer className="w-full mx-auto  max-w-[2000px] overflow-visible bg-main py-5 relative">
      <img className="senka z-0 pointer-events-none absolute   xl:block hidden md:bottom-0 left-[calc(50%-174px)] drop-shadw-[" src="/planina.png"/>
      <div className=" flex  relative z-10  flex-col lg:flex-row md:justify-between w-11/12 md:w-10/12 mx-auto">
        {/**levo */}
        <div className= "w-full md:w-5/12">
          <div className="py-5">
            <span className="text-3xl font-bold text-white">NADA</span>
            <span className="text-3xl font-thin text-white">MACURA</span>
          </div>
          <hr />
          <div className="flex items-end gap-2 py-4">
            <h1 className="text-sm text-white/70">Photograph copyright:</h1>
            <ul className="flex items-center">
              <li className=" px-1  ">
                <Link href="" passHref>
                  <a className="text-blue-800">Link1</a>
                </Link>
              </li>
              <li>
                <div className="h-[13px] w-[2px] bg-white/50"></div>
              </li>
              <li className=" px-1 ">
                <Link href="" passHref>
                  <a className="text-blue-800">Link1</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/**Desno */}

        <div className=" w-full md:w-7/12  flex flex-col items-start  lg:items-end">
          <div className="flex  lg:flex-row flex-col gap-5 items-center">
            <ul className="flex lg:flex-row flex-col  gap-5  py-6 ">
              <li>
                <Link href="/" passHref>
                  <a className={linksStyle.nonActive}>Homepage</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a className={linksStyle.nonActive}>About</a>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <a className={linksStyle.nonActive}>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/references" passHref>
                  <a className={linksStyle.nonActive}>References</a>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <a className={linksStyle.nonActive}>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className={linksStyle.nonActive}>Contact</a>
                </Link>
              </li>
            </ul>

            <ul className="flex  gap-2  py-6 ">
              <li className="w-9 h-9  hover:bg-main-ciyan hover:border-transparent transition-all hover:rounded-full border flex items-center justify-center">
                <Link href="https://www.facebook.com/PopArt.Web.Dizajn/">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.429 6.969H11.143V8.819C11.678 7.755 13.05 6.799 15.111 6.799C19.062 6.799 20 8.917 20 12.803V20H16V13.688C16 11.475 15.465 10.227 14.103 10.227C12.214 10.227 11.429 11.572 11.429 13.687V20H7.429V6.969V6.969ZM0.57 19.83H4.57V6.799H0.57V19.83V19.83ZM5.143 2.55C5.14315 2.88528 5.07666 3.21724 4.94739 3.52659C4.81812 3.83594 4.62865 4.11651 4.39 4.352C3.9064 4.83262 3.25181 5.10165 2.57 5.1C1.88939 5.09954 1.23631 4.8312 0.752 4.353C0.514211 4.11671 0.325386 3.83582 0.196344 3.52643C0.0673015 3.21704 0.000579132 2.88522 0 2.55C0 1.873 0.27 1.225 0.753 0.747C1.23689 0.268158 1.89024 -0.000299211 2.571 2.50265e-07C3.253 2.50265e-07 3.907 0.269 4.39 0.747C4.872 1.225 5.143 1.873 5.143 2.55Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>

              <li className="w-9 h-9  hover:bg-main-ciyan hover:border-transparent transition-all hover:rounded-full border flex items-center justify-center">
                <Link href="https://www.linkedin.com/company/popart-studio">
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_39_6)">
                      <path
                        d="M1.98518 16V8.49234H0V5.78922H1.98518V3.4804C1.98518 1.66611 3.15784 0 5.85989 0C6.9539 0 7.76288 0.10488 7.76288 0.10488L7.69914 2.62914C7.69914 2.62914 6.87411 2.6211 5.97381 2.6211C4.99941 2.6211 4.8433 3.07014 4.8433 3.81544V5.78922H7.77659L7.64896 8.49234H4.8433V16H1.98518Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_39_6">
                        <rect width="7.77659" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>

              <li className="w-9 h-9 hover:bg-main-ciyan hover:border-transparent transition-all hover:rounded-full border flex flex items-center justify-center">
                <Link href="https://www.instagram.com/popart.studio/?hl=sr">
                <svg width="18" height="18" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.24421 3.04109C4.47078 3.04109 3.03953 4.47234 3.03953 6.24578C3.03953 8.01921 4.47078 9.45046 6.24421 9.45046C8.01765 9.45046 9.4489 8.01921 9.4489 6.24578C9.4489 4.47234 8.01765 3.04109 6.24421 3.04109ZM6.24421 8.32859C5.09734 8.32859 4.1614 7.39265 4.1614 6.24578C4.1614 5.0989 5.09734 4.16296 6.24421 4.16296C7.39109 4.16296 8.32703 5.0989 8.32703 6.24578C8.32703 7.39265 7.39109 8.32859 6.24421 8.32859ZM9.58015 2.16296C9.16609 2.16296 8.83171 2.49734 8.83171 2.9114C8.83171 3.32546 9.16609 3.65984 9.58015 3.65984C9.99422 3.65984 10.3286 3.32703 10.3286 2.9114C10.3287 2.81308 10.3094 2.7157 10.2719 2.62484C10.2343 2.53398 10.1792 2.45143 10.1097 2.3819C10.0401 2.31238 9.95757 2.25725 9.86671 2.21968C9.77585 2.18212 9.67847 2.16284 9.58015 2.16296V2.16296ZM12.4911 6.24578C12.4911 5.38328 12.4989 4.52859 12.4505 3.66765C12.402 2.66765 12.1739 1.78015 11.4427 1.0489C10.7098 0.31609 9.8239 0.0895272 8.8239 0.0410897C7.9614 -0.00734777 7.10671 0.000464756 6.24578 0.000464756C5.38328 0.000464756 4.52859 -0.00734777 3.66765 0.0410897C2.66765 0.0895272 1.78015 0.317652 1.0489 1.0489C0.31609 1.78171 0.0895272 2.66765 0.0410897 3.66765C-0.00734777 4.53015 0.000464756 5.38484 0.000464756 6.24578C0.000464756 7.10671 -0.00734777 7.96296 0.0410897 8.8239C0.0895272 9.8239 0.317652 10.7114 1.0489 11.4427C1.78171 12.1755 2.66765 12.402 3.66765 12.4505C4.53015 12.4989 5.38484 12.4911 6.24578 12.4911C7.10828 12.4911 7.96296 12.4989 8.8239 12.4505C9.8239 12.402 10.7114 12.1739 11.4427 11.4427C12.1755 10.7098 12.402 9.8239 12.4505 8.8239C12.5005 7.96296 12.4911 7.10828 12.4911 6.24578V6.24578ZM11.1161 9.93015C11.002 10.2145 10.8645 10.427 10.6442 10.6458C10.4239 10.8661 10.213 11.0036 9.92859 11.1177C9.10671 11.4442 7.15515 11.3708 6.24421 11.3708C5.33328 11.3708 3.38015 11.4442 2.55828 11.1192C2.2739 11.0052 2.0614 10.8677 1.84265 10.6473C1.62234 10.427 1.48484 10.2161 1.37078 9.93172C1.04578 9.10828 1.11921 7.15671 1.11921 6.24578C1.11921 5.33484 1.04578 3.38171 1.37078 2.55984C1.48484 2.27546 1.62234 2.06296 1.84265 1.84421C2.06296 1.62546 2.2739 1.4864 2.55828 1.37234C3.38015 1.04734 5.33328 1.12078 6.24421 1.12078C7.15515 1.12078 9.10828 1.04734 9.93015 1.37234C10.2145 1.4864 10.427 1.6239 10.6458 1.84421C10.8661 2.06453 11.0036 2.27546 11.1177 2.55984C11.4427 3.38171 11.3692 5.33484 11.3692 6.24578C11.3692 7.15671 11.4427 9.10828 11.1161 9.93015Z" fill="white"/>
</svg>

                </Link>
              </li>
            </ul>
          </div>
          <hr className="bg-white  w-8/12" />

          <div className="flex  gap-2 py-4">
            <h1 className="text-sm text-white/70">Design and Development:</h1>
            <ul className="flex items-center">
              <li className=" px-1  ">
                <Link href="https://www.popwebdesign.net/" passHref>
                  <a target={"_blank"} className="text-blue-800">
                    PopArtStudio
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
