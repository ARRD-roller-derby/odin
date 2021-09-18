import { partners } from "../../utils/partners";
import classes from "./Partners.module.css";
import Image from "next/image";
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
            <Image {...partner} width={partner.width} height={partner.heigth}/>
            </div>
          </a>
        </div>
      ))}
      </div>
    </div>
  );
}
