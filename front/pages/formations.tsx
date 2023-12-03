import {ReactElement} from "react";
import AppLayout from "../components/app/layout/AppLayout";
import Head from "next/head";
import IconGraduation from "../components/app/icons/IconGraduation";
import {Education} from "../types/education";
import {NextPageWithLayout} from "./_app";
import EducationList from "../components/app/education/EducationList";
import EducationLogoList from "../components/app/education/EducationLogoList";

type FormationPageProps = {
  educations: Array<Education>;
  error: null | string;
}

const FormationPage: NextPageWithLayout<FormationPageProps> = ({ educations, error }) => {

  return (
    <div className="col-md-12">
      <div id="content" className="panel-container">
        <div id="resume">
          <div className="row">
            <section className="education">
              <div className="section-title top_30">
                <span></span>
                <h2>Mes formations</h2>
              </div>
              <div className="row">
                <div className="education-history col-md-12 padding_15 padbot_30">
                  <EducationList educations={educations} />

                  {error && (
                    <p className="little-text">{error}</p>
                  )}
                </div>
              </div>
            </section>
          </div>
          <div className="row">
            <EducationLogoList educations={educations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res: Response = await fetch(`${process.env.API_URL}/api/educations`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    return {
      props: {
        educations: [],
        error: 'Impossible de charger les formations :('
      }
    }
  }

  const educations: Array<Education> = await res.json();

  return {
    props: {
      educations: educations,
      error: null
    },
  };
}

FormationPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <Head>
        <title>Florent Damiens - Formations</title>
        <meta property="description" content="Mes différentes formations sur Clermont-Ferrand" />
        <meta property="og:title" content="Florent Damiens - Formations" key="title" />
        <meta property="og:description" content="Mes différentes formations sur Clermont-Ferrand" key="description" />
      </Head>

      {page}
    </AppLayout>
  )
}

export default FormationPage;
