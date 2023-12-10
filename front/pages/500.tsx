import AppLayout from "../components/app/layout/AppLayout";
import Head from "next/head";
import Link from "next/link";
import {ReactElement} from "react";
import {NextPageWithLayout} from "./_app";

const ErrorPage: NextPageWithLayout = () => {
  return (
    <div className="col-md-12">
      <div id="content" className="panel-container">
        <div id="home">
          <div className="row">
            <section className="about-me line col-md-12 padding_30 padbot_45">
              <div className="section-title">
                <span></span>
                <h2>Erreur :(</h2>
              </div>
              <p className="top_30">
                Malheureusement, nous n&apos;arrivons pas à construire la page correctement. Vous pouvez revenir à l&apos;accueil depuis le menu ou cliquer sur le bouton.
              </p>
              <div className="top_30">
                <Link className="home-btn" href="/">
                  <button className="site-btn">
                    Retourner à l&apos;accueil
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

ErrorPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <Head>
        <title>Florent Damiens - Oops :(</title>
        <meta property="og:title" content="Florent Damiens - Développeur" key="title" />
      </Head>

      {page}
    </AppLayout>
  )
}

export default ErrorPage;
