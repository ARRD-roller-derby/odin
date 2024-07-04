import { partnersInterface } from './interfaces';
const url = process.env.NEXT_PUBLIC_URL_BUCKET + 'partners'
export const partners: Array<partnersInterface> = [
  {
    title: "Ville de Maromme",
    href: "http://www.maromme.fr",
    src: url + "/logo_maromme.svg",
    width: 150,
    heigth: 150,
  },
  {
    title: "Le vixen",
    href: "https://www.facebook.com/vixnrouen",
    src: url + "/vixen_logo.webp",
    width: 150,
    heigth: 150,
  },
];
