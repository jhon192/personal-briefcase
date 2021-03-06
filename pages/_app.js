// import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <section className="max-w-screen max-h-full bg-blue-900">
      <Head>
        <link rel="shortcut icon" href="briefcase.svg" type="image/x-icon" />
        <title>Personal Briefcase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Jhon Garcia"/>
        <meta
          name="description"
          content="Personal briefcase created using next.js, tailwind and other libraries and frameworks, created by Jhon Garcia"
        />
      </Head>
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
