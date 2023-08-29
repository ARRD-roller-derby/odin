import classes from './menu.module.css'
import Link from 'next/link'
import { links } from './links'

export default function MenuDesktop() {
  return (
    <div className={classes.gridDesktop}>
      <div className={classes.linksLeft}>
        {links
          .filter((it) => it.side === 'right')
          .map((link) =>
            link.target === '_blank' ? (
              <a key={link.title} {...link}>
                {link.title}
              </a>
            ) : (
              <Link {...link} key={link.title}>
                <span className={classes.panelMenuLink} title={link.title}>
                  {link.title}
                </span>
              </Link>
            )
          )}
      </div>
      <div className={classes.logos}>
        <Link href="/">
          <img
            src="/drakarrd_logo.svg"
            alt="logo"
            className={classes.logo}
            width="75"
            height="75"
          />
        </Link>
        <Link href="/">
          <img
            src="/assguarrd_logo.svg"
            alt="logo"
            className={classes.logo}
            width="75"
            height="75"
          />
        </Link>
      </div>
      <div className={classes.linksRight}>
        {links
          .filter((it) => it.side === 'left')
          .map((link) => (
            <Link {...link} key={link.title}>
              {link.title}
            </Link>
          ))}
      </div>
    </div>
  )
}
