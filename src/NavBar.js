import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <>
      <Navbar
        className="my-2"
        color="dark"
        dark
        style={{ padding: "1rem", margin: "1rem" }}
      >
        <NavbarBrand href="/">
          <SocialIcon
            url="https://www.instagram.com"
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 45, width: 45 }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com"
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 45, width: 45 }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.pinterest.com"
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 45, width: 45 }}
            target="_blank"
          />
        </NavbarBrand>
      </Navbar>
      <Navbar className="m-6" color="secondary" dark></Navbar>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/"></NavbarBrand>
      </Navbar>
    </>
  );
}

export default NavBar;
