import { useInView } from 'react-intersection-observer'
import classes from './BlockTraining.module.css'
import useIsMobile from '../../utils/useIsMobile'

export default function BlockTraining() {
  const { ref, inView } = useInView({
      threshold: 0,
    }),
    ismobile = useIsMobile()

  return (
    <div className={classes.container} ref={ref} data-inview={inView}>
      <h2 className={classes.title}>Les entraînements</h2>
      <div className={classes.containerTimes}>
        <div className={classes.training}>
          <div className={classes.day}>Mercredi</div>
          <div className={classes.time}>
            <div>Roller derby</div>19h45 - 22h00
          </div>
          <div className={classes.address}>
            <div className={classes.level}>Entraînement Rookie / Inter / Advanced</div>
            <div className={classes.stadium}>
              Salle LESUEUR - Stade Paul VAUQUELIN
            </div>
            <div className={classes.street}>Rue Ernest Danet</div>
            <div className={classes.details}>
              (première salle sur la gauche)
            </div>
            <div className={classes.city}>76 150 MAROMME</div>
          </div>
        </div>
        {ismobile ? (
          <div className={classes.trainingsMobile}>
            <div className={classes.training}>
              <div className={classes.day}>Dimanche</div>
              <div className={classes.time}>
                <div>Cours de patin / Derbyschool</div>17h00 - 19h30
              </div>
              <div className={classes.address}>
                <div className={classes.level}>Tous niveaux</div>
                <div className={classes.stadium}>Gymnase Jesse OWENS</div>
                <div className={classes.street}>Rue Denis Papin</div>
                <div className={classes.details}>Parc de SIGNA</div>
                <div className={classes.city}>76 150 MAROMME</div>
              </div>
            </div>
            <h2 className={classes.title}>Roller derby</h2>
            <div className={classes.training}>
              <div className={classes.day}>Vendredi</div>
              <div className={classes.time}>19h30 - 22h00</div>
              <div className={classes.address}>
                <div className={classes.level}>Entraînement Rookie / Inter / Advanced</div>
                <div className={classes.stadium}>Gymnase Jesse OWENS</div>
                <div className={classes.street}>Rue Denis Papin</div>
                <div className={classes.details}>Parc de SIGNA</div>
                <div className={classes.city}>76 150 MAROMME</div>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.trainings}>
            <div className={classes.day}>Vendredi</div>

            <div className={classes.day}>Dimanche</div>
            <div className={classes.time}>
              <div>Roller derby</div>
              19h30 - 22h00
            </div>
            <div className={classes.time}>
              <div>Cours de patin / Derbyschool</div>17h00 - 19h30
            </div>
            <div className={classes.address}>
              <div className={classes.level}>Ouvert à tous</div>
              <div className={classes.stadium}>Gymnase Jesse OWENS</div>
              <div className={classes.street}>rue Denis Papin</div>
              <div className={classes.details}>Parc de SIGNA</div>
              <div className={classes.city}>76 150 MAROMME</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
