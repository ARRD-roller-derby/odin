import { partners } from "../../utils/partners";
import classes from "./Partners.module.css";
import { partnersInterface } from "../../utils/interfaces";

export default function Partners() {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Nos partenaires</h3>
      <div className={classes.containerPartners}>
        {partners.map((partner: partnersInterface) => (
          <div className={classes.partner} key={partner.title}>
            <a {...partner} target="_blank">
              <div className={classes.logo}>
                <img {...partner} width={150} height={150} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
