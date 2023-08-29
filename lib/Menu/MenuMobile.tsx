import ArrowBottom from "../ArrowBottom/ArrowBottom";
import Hamburger from "../Hamburger/Hamburger";
import classes from "./menu.module.css";
import { useState } from "react";
import { links } from "./links";
import Link from "next/link";

export default function MenuMobile({fixed=false}: {fixed?: boolean}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.mobile}>
      <Hamburger handleClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <div className={classes.panelMenu} data-isopen={isOpen}>
        <div className={classes.panelMenuLinks}>
          <Link href="/">
            <a
              className={classes.panelMenuLink}
              title="accueil"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </a>
          </Link>
          {links.map((link) => (
           <Link {...link} key={link.title}>
              <a
                className={classes.panelMenuLink}
                title={link.title}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className={classes.containerMobile} data-fixed={fixed}>
        <div className={classes.logosMobileContainer} >
          <div className={classes.logosMobile}>
            <Link href="/">
              <img
                src="/drakarrd_logo.svg"
                alt="logo"
                className={classes.logo}
                width="50"
                height="50"
              />
            </Link>
            <Link href="/">
              <img
                src="/assguarrd_logo.svg"
                alt="logo"
                className={classes.logo}
                width="50"
                height="50"
              />
            </Link>
          </div>
        </div>
       {!fixed && <ArrowBottom />} 
      </div>
    </div>
  );
}
