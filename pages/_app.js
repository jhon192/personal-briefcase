// import { ThemeProvider } from "next-themes";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <section className="max-w-screen max-h-full bg-slate-700">
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
