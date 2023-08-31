import BlockIndex from '../BlockIndex/BlockIndex'
import classes from './BlockDerby.module.css'
import Link from 'next/link'

export default function BlockDerby() {
  return (
    <BlockIndex position="right">
      <div className={classes.container}>
        <div className={classes.txt}>
          <h2>
            C{`'`}est quoi le <span className="trash title">roller derby</span>{' '}
            ?{' '}
          </h2>
          <div className={classes.desc}>
            <p>
              Né d’une idée germée aux Etats-Unis au début des années 30, le
              Roller Derby est un sport à part entière depuis{' '}
              <span className="trash">1937</span>.
            </p>
            <p>
              Le <span className="trash">but du jeu</span> étant pour l{`'`}une
              des joueuses ou l{`'`}un des joueurs de réussir à dépasser en un
              laps de temps donné les joueuses ou les joueurs adverses sans se
              faire projeter au sol ni sortir de la piste.
            </p>
          </div>
          <div className={classes.buttons}>
            <Link href="/roller-derby">
              <span className="button">Je veux tout savoir !</span>
            </Link>
          </div>
        </div>
        <div className="containerImg">
          <div className="img">
            <img
              src={`${process.env.NEXT_PUBLIC_URL_BUCKET}pictures/rd_explain.webp`}
              width="800"
              height="894"
              alt="roller derby"
            />
          </div>
        </div>
      </div>
    </BlockIndex>
  )
}
