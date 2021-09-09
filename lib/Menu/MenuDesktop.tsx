import classes from "./menu.module.css";
import Link from "next/link";

export default function MenuDesktop() {
  return (
    <>
      <div className={classes.linksLeft}>
        <Link href="">
          <a>lien</a>
        </Link>
        <Link href="">
          <a>lien</a>
        </Link>
        <Link href="">
          <a>lien</a>
        </Link>
      </div>
      <div className={classes.logos}>
        <img
          src="/drakarrd_logo.svg"
          alt="logo"
          className={classes.logo}
          width="75"
          height="75"
        />
        <img
          src="/assguarrd_logo.svg"
          alt="logo"
          className={classes.logo}
          width="75"
          height="75"
        />
      </div>
      <div className={classes.linksRight}>
        <Link href="">
          <a>lien</a>
        </Link>
        <Link href="">
          <a>lien</a>
        </Link>
        <Link href="">
          <a>lien</a>
        </Link>
      </div>
    </>
  );
}
