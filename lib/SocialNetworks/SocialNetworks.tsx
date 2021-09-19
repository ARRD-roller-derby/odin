import { socialNetworks } from "../../utils/socialNetworks";
import classes from "./SocialNetworks.module.css";
import { partnersInterface } from "../../utils/interfaces";

export default function SocialNetworks(){
    return <div className={classes.container}>
                <h3 className={classes.title}>Suivez-nous</h3>
        <div className={classes.containerSocial}>
      {socialNetworks.map((network: partnersInterface) => (
        <div className={classes.partner} key={network.title}>
          <a {...network} target="_blank">
          <div className={classes.logo}>
            <img {...network} width={network.width} height={network.heigth}/>
            </div>
          </a>
        </div>
      ))}
      </div>
    </div>
}