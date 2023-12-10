import {ReactElement} from "react";
import AppLayout from "../components/app/layout/AppLayout";
import Head from "next/head";
import {Experience} from "../types/experience";
import ExperienceList from "../components/app/experience/ExperienceList";
import ExperienceLogoList from "../components/app/experience/ExperienceLogoList";

type ExperiencePageProps = {
  experiences: Array<Experience>;
  error: null | string;
}

function ExperiencePage({ experiences, error }: ExperiencePageProps) {

  return (
    <div className="col-md-12">
      <div id="content" className="panel-container">
        <div id="experience">
          <div className="row">
            <section className="education">
              <div className="section-title top_30">
                <span></span>
                <h2>Mes expériences</h2>
              </div>
              <div className="row">
                <div className="working-history col-md-12 padding_15 padbot_30">
                  <ExperienceList experiences={experiences} />

                  {error && (
                    <p className="little-text">{error}</p>
                  )}
                </div>
              </div>
            </section>
          </div>
          <div className="row">
            <ExperienceLogoList experiences={experiences} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res: Response = await fetch(`${process.env.API_URL}/api/experiences`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    return {
      props: {
        experiences: [],
        error: 'Impossible de charger les expériences :('
      }
    }
  }

  const experiences: Array<Experience> = await res.json();

  return {
    props: {
      experiences: experiences,
      error: null
    },
  };
}

ExperiencePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <Head>
        <title>Florent Damiens - Expériences</title>
        <meta property="og:title" content="Florent Damiens - Expériences" key="title" />
        <meta property="og:description" content="Mes différentes expériences en tant développeur web" key="description" />
        <meta property="description" content="Mes différentes expériences en tant développeur web" />
      </Head>

      {page}
    </AppLayout>
  )
}

export default ExperiencePage;
