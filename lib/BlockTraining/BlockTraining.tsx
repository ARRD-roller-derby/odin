import { useInView } from "react-intersection-observer";
import classes from "./BlockTraining.module.css";

export default function BlockTraining() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className={classes.container} ref={ref} data-inview={inView}>
      <h2 className={classes.title}>
        <span className="trash">Les entrainements</span>
      </h2>
      <div className={classes.containerTimes}>
        <div className={classes.training}>
          <div className={classes.day}>Mercredi</div>
          <div className={classes.time}>19h45 - 21h45</div>
          <div className={classes.address}>
            <div className={classes.level}>Confirmé.e.s</div>
            <div className={classes.stadium}>
              Salle LESUEUR - Stade Paul VAUQUELIN
            </div>
            <div className={classes.street}>Rue Ernest DANET</div>
            <div className={classes.details}>
              (première salle sur la gauche)
            </div>
            <div className={classes.city}>76 150 MAROMME</div>
          </div>
        </div>
        <div className={classes.trainings}>
          <div className={classes.day}>Vendredi</div>
          <div className={classes.day}>Dimanche</div>
          <div className={classes.time}>19h30 - 22h00</div>
          <div className={classes.time}>17h00 - 19h30</div>
          <div className={classes.address}>
            <div className={classes.level}>Ouvert à tous</div>
            <div className={classes.stadium}>Gymnase Jesse OWENS</div>
            <div className={classes.street}>rue Denis Papin</div>
            <div className={classes.details}>Parc de SIGNA</div>
            <div className={classes.city}>76 153 MAROMME</div>
          </div>
        </div>
      </div>
    </div>
  );
}
