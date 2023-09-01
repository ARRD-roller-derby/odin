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
              <Link
                {...link}
                key={link.title}
                className={classes.panelMenuLink}
              >
                {link.title}
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
          .map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.title}
                  className={classes.panelMenuLink}
                  {...link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.title}
                </a>
              )
            } else {
              return (
                <Link
                  {...link}
                  key={link.title}
                  className={classes.panelMenuLink}
                >
                  {link.title}
                </Link>
              )
            }
          })}
      </div>
    </div>
  )
}
