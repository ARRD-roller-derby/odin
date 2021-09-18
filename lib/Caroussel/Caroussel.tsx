import classes from "./Caroussel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";

export default function Caroussel({ images }) {
  const [size, setSize] = useState<
    undefined | { width: number; height: number }
  >(undefined);

  useEffect(() => {
    handleResize();
  }, [images]);

  function handleResize() {
    const width = window.innerWidth,
      height = window.innerWidth > 750 ? (width / 16) * 9 : window.innerHeight;
    setSize({ width, height });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>association ROUEN ROLLER DERBY</h1>
          <h2 className={classes.subtitle}>- maromme -</h2>
        </div>
        {size && (
          <Slider
            infinite
            autoplay
            speed={800}
            autoplaySpeed={3000}
            fade
            className={classes.carroussel}
          >
            {images.map((slide: string) => (
              <div className={classes.slide} key={slide}>
                <img
                  src={process.env.NEXT_PUBLIC_URL_BUCKET + slide}
                  width={size.width}
                  height={size.height}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
      <Menu />
    </div>
  );
}
