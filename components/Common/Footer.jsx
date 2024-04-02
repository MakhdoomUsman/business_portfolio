import React from "react";
import Container from "../Layout/Container";
import Image from "next/image";

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
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
