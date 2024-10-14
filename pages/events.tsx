import dynamic from 'next/dynamic'
import LayoutPage from '../lib/LayoutPage/LayoutPage'

const Events = dynamic(
  () => import('../lib/Events/Events').then((c) => c.Events),
  {
    ssr: false,
  }
)
export default function EventsPage() {
  return (
    <LayoutPage
      title="Nos évènements à venir"
      description="Découvrez les évènements à venir de l'association"
    >
      <div className="container">
        <Events />
      </div>
    </LayoutPage>
  )
}
