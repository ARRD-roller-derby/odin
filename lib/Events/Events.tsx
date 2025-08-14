import { useEffect, useState } from 'react'
import styles from './Events.module.css'
import { useCreateBlockNote } from '@blocknote/react'
import { set } from 'lodash'
import { Event } from '../Event/Event'

export function Events() {
  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState([])
  const handleFetchEvents = async () => {
    setLoading(true)
    const response = await fetch('/api/events')
    const data = await response.json()
    setEvents(data)
    setLoading(false)
  }
  useEffect(() => {
    handleFetchEvents()
  }, [])

  if (loading) return <div>Chargement...</div>
  return (
    <div className={styles.container}>
      {events.map((event) => (
        <Event event={event} key={event._id} />
      ))}
    </div>
  )
}
