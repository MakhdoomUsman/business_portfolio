import React from "react";
import Container from "../Layout/Container";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-primaryDark">
      <Container>
        <div className="grid grid-cols-4 py-20 gap-10 items-start">
          <div className=" space-y-7">
            <div className=" relative max-w-60">
              <Image
                src={"/images/Logo/logo.svg"}
                alt="Website Logo"
                fill
                className="custom-img"
                priority
                sizes="100%"
              />
            </div>
            <p className=" text-primaryGray leading-7 font-light">
              Metalogics delivers innovative solutions for businesses. Our team
              provides web development, digital marketing, and software
              consulting services.
            </p>
            <div className="flex gap-10 items-center">
              <div className="size-10 p-2 hover:bg-primary cursor-pointer hover:rotate-[360deg] transition-all ease-linear duration-700 bg-primaryExtraDark rounded-lg">
                <Image
                  src={"/images/Icons/icons8-facebook-50.png"}
                  alt="facebook"
                  fill
                  className="custom-img invert"
                  priority
                  sizes="100%"
                />
              </div>
              <div className="size-10 p-2 hover:bg-primary cursor-pointer hover:rotate-[360deg] transition-all ease-linear duration-700 bg-primaryExtraDark rounded-lg">
                <Image
                  src={"/images/Icons/icons8-linkedin-30.png"}
                  alt="facebook"
                  fill
                  className="custom-img invert"
                  priority
                  sizes="100%"
                />
              </div>
              <div className="size-10 p-2 hover:bg-primary cursor-pointer hover:rotate-[360deg] transition-all ease-linear duration-700 bg-primaryExtraDark rounded-lg">
                <Image
                  src={"/images/Icons/icons8-youtube-48.png"}
                  alt="facebook"
                  fill
                  className="custom-img invert"
                  priority
                  sizes="100%"
                />
              </div>
            </div>
          </div>
          <div className=" space-y-5">
            <h1 className=" font-bold text-[25px] text-primaryGray">
              Our Services
            </h1>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              UI/UX Design
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Web Development
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Graphic Design
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Quality Assurance
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Marketing
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              SEO
            </Link>
          </div>
          <div className=" space-y-5">
            <h1 className=" font-bold text-[25px] text-primaryGray">
              Quick Links
            </h1>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              About Us
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Services
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Projects
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Faqs
            </Link>
            <Link
              href={"/"}
              className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 block translate-x-0 hover:translate-x-3"
            >
              Contact Us
            </Link>
          </div>
          <div className=" space-y-5">
            <h1 className=" font-bold text-[25px] text-primaryGray">
              Quick Links
            </h1>
            <div className="flex gap-2.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1877f2"
                className="size-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <Link
                href={"/"}
                className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 "
              >
                +92 309-7039620
              </Link>
            </div>
            <div className="flex gap-2.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#1877f2"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <Link
                href={"/"}
                className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 "
              >
                +92 309-7039620
              </Link>
            </div>
            <div className="flex gap-2.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1877f2"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>

              <Link
                href={"/"}
                className=" text-primaryGray font-medium hover:text-primary transition-all ease-linear duration-300 "
              >
                +92 309-7039620
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
