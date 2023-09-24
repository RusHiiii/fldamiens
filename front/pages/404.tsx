import AppLayout from "../components/app/layout/AppLayout";
import Head from "next/head";
import Link from "next/link";
import {ReactElement} from "react";

function NotFoundPage() {
  return (
    <div className="col-md-12">
      <div id="content" className="panel-container">
        <div id="home">
          <div className="row">
            <section className="about-me line col-md-12 padding_30 padbot_45">
              <div className="section-title">
                <span></span>
                <h2>Page non trouvée :(</h2>
              </div>
              <p className="top_30">
                La page que vous demandez n'existe pas. Vous pouvez revenir à l'accueil depuis le menu ou cliquer sur le bouton.
              </p>
              <div className="top_30">
                <Link className="home-btn" href="/">
                  <button className="site-btn">
                    Retourner à l'accueil
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

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <Head>
        <title>Florent Damiens - Oops :(</title>
        <meta property="og:title" content="Florent Damiens - Oops :(" key="title" />
      </Head>

      {page}
    </AppLayout>
  )
}

export default NotFoundPage;
