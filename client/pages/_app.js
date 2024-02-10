import "../styles/globals.css";
import {Navbar} from "../components/componentindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar/>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
