import classes from "./Caroussel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

export default function Caroussel({ images }) {
  return (
    <div className={classes.container}>
      Un dossier pour mobile et un pour desktop avec taille calculé selon l'écran
      <Slider infinite autoplay autoplaySpeed={5000} fade>
        {images.map((slide:string) => (
            <div className={classes.slide}    key={slide}>
              <Image
                src={process.env.NEXT_PUBLIC_URL_BUCKET + slide}
                width="900"
                height="1000"

              />
             </div>
        ))}
      </Slider>
    </div>
  );
}
