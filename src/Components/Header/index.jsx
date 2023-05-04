import { useState, useEffect } from "react";

import logoAdminDesktop from "../../assets/logoAdminDesktop.png";
import logoAdminMobile from "../../assets/logoAdminMobile.png";

import { DesktopContainer, MobileContainer } from "./styles";
import { Button } from "../Button";
import { RxExit, RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export function Header({ children }) {
  const [isScreenMobile, setIsScreenMobile] = useState(window.innerWidth < 820);

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsScreenMobile(window.innerWidth < 820);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return isScreenMobile ? (
    <MobileContainer>
      <div className="nav">
        <button onClick={handleShowMenu}>
          {showMenu ? (
            <RxCross1 size={24}></RxCross1>
          ) : (
            <RxHamburgerMenu size={24}></RxHamburgerMenu>
          )}
        </button>

        {showMenu ? (
          <h1>Menu</h1>
        ) : (
          <img src={logoAdminMobile} alt="FoodExplorer" />
        )}
      </div>

      <div className={`nav-elements ${showMenu && "active"}`}>
        {children}

        <ul>
          <li>
            <a href="">Novo Prato</a>
          </li>
          <li>
            <a href="">Sair</a>
          </li>
        </ul>
      </div>
    </MobileContainer>
  ) : (
    <DesktopContainer>
      <img src={logoAdminDesktop} alt="" />
      <div className="nav"></div>
      {children}

      <div className="buttonWrapper">
        <Button title={"Novo Prato"}></Button>
      </div>

      <button>
        <RxExit size={24} />
      </button>
    </DesktopContainer>
  );
}
