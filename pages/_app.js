import Head from "next/head";
import { useRouter } from "next/router";

import AppBar from "../components/AppBar";
import PageState from "../components/PageState";

import "./global.scss";

function MmoApp({ Component, pageProps }) {
  const router = useRouter();
  const viewAppBar = router.pathname !== "/play";
  return (
    <PageState>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <div className="page">
        {viewAppBar && <AppBar />}
        <Component {...pageProps} />
      </div>
    </PageState>
  );
}

export default MmoApp;
