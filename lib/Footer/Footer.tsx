import Partners from "../Partners/Partners";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import classes from "./Footer.module.css";

export default function Footer(){


    /**
     * //TODO
     * recupérer les logos partenaire
     * faire un objet avec les lien / images
     * mettre les images au bon format
     * 
     * Liens vers la page mentions légales et aussi AG. 
     * 
     */
    return <footer className={classes.container}>
        <div className={classes.cols}>
            <Partners/>
            <SocialNetworks/>
        </div>
    </footer>
}