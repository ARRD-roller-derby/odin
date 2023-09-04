import classes from './JoinButton.module.css'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export default function JoinButton() {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  return (
    <div className={classes.container} ref={ref} data-inview={inView}>
      <Link href="/nous-rejoindre">
        <span className={classes.link}>Rejoignez-nous</span>
      </Link>
    </div>
  )
}
