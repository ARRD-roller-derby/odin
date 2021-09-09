import classes from "./Caroussel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Caroussel({ images }) {
  const [size, setSize] = useState<
    undefined | { width: number; height: number }
  >(undefined);

  useEffect(() => {
    const width = window.innerWidth,
      height = window.innerHeight;
    setSize({ width, height });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <div className={classes.title}>
          ROUEN ROLLER DERBY - MAROMME
        </div>
        {size && (
          <Slider infinite autoplay speed={800} autoplaySpeed={5000} fade className={classes.carroussel}>
            {images.map((slide: string) => (
              <div className={classes.slide} key={slide}>
                <Image
                  src={process.env.NEXT_PUBLIC_URL_BUCKET + slide}
                  width={size.width}
                  height={size.height}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
