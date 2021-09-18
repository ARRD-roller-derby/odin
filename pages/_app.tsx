import '../styles/globals.css'
import dayjs from "dayjs";
import fr from "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale(fr);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
