import classes from "./Caroussel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Menu from "../Menu/Menu";
import useIsMobile from "../../utils/useIsMobile";

export default function Caroussel() {
  const isMobile = useIsMobile();

  const NUM_IMAGES = isMobile ? 4 : 3;

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>ARRD</h1>
          <h2 className={classes.subtitle}>- maromme -</h2>
        </div>

        <Slider
          infinite
          autoplay
          speed={800}
          autoplaySpeed={3000}
          fade
          className={classes.carroussel}
        >
          {Array.from({ length: NUM_IMAGES }, (_, index) => index + 1).map((num: number) => (
            <div className={classes.slide} key={num}>
              <img
                alt={`Image ${num}`}
                src={`/${isMobile ? 'mobile' : 'desktop'}/${num}.webp`}
                width={isMobile ? 1080 : 1920}
                height={isMobile ? 1920 : 1080}
              />
            </div>
          ))}
        </Slider>
      </div>
      <Menu />
    </div>
  );
}
