import styles from './Event.module.css'
import dayjs from 'dayjs'
import { ReadEditor } from '../ReadEditor/ReadEditor'

type EventProps = {
  event: {
    title: string
    date: string
    description: any
    image: string
    start: Date
  }
}
export function Event({ event }: EventProps) {
  console.log(event)
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{event.title}</h2>
      <div className={styles.date}>{dayjs(event.start).format('LLL')}</div>
      <div className={styles.desc}>
        <ReadEditor content={event.description} />
      </div>
    </div>
  )
}
