import {ReactElement, useState} from "react";
import AppLayout from "../../components/app/layout/AppLayout";
import Head from "next/head";
import IconClone from "../../components/app/icons/IconClone";
import Link from "next/link";
import {Project} from "../../types/project";
import {NextPageWithLayout} from "../_app";

type ProjectPageProps = {
  projects: Array<Project>;
  error: null | string;
}

const ProjectPage: NextPageWithLayout<ProjectPageProps> = ({ projects, error }) => {
  return (
    <div className="col-md-12">
      <div id="content" className="panel-container">
        <div id="portfolio" className="row bottom_45">
          <section className="col-md-12">
            <div className="col-md-12 content-header bottom_15">
              <div className="section-title top_30 bottom_30">
                <span></span>
                <h2>Mes projets</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12 portfolio">
                <div className="cbp-item webdesign col-lg-4 col-md-6 col-xs-6">
                  <a href="/work-01.html">
                    <figure>
                      <div className="icon">
                        <i>
                          <IconClone height="1em" width="1em" />
                        </i>
                      </div>
                      <img src="images/work-01.jpg" alt="" />
                        <figcaption>
                          <span className="title">Babel Admin</span><br/>
                          <span className="info">An admin template design.</span>
                        </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="cbp-item webdesign col-lg-4 col-md-6 col-xs-6">
                  <Link href="/projets/1">
                    <figure>
                      <div className="icon">
                        <i>
                          <IconClone height="1em" width="1em" />
                        </i>
                      </div>
                      <img src="images/work-01.jpg" alt="" />
                      <figcaption>
                        <span className="title">Babel Admin</span><br/>
                        <span className="info">An admin template design.</span>
                      </figcaption>
                    </figure>
                  </Link>
                </div>
                <div className="cbp-item webdesign col-lg-4 col-md-6 col-xs-6">
                  <a href="/work-01.html">
                    <figure>
                      <div className="icon">
                        <i>
                          <IconClone height="1em" width="1em" />
                        </i>
                      </div>
                      <img src="images/work-01.jpg" alt="" />
                        <figcaption>
                          <span className="title">Babel Admin</span><br/>
                          <span className="info">An admin template design.</span>
                        </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res: Response = await fetch(`${process.env.API_URL}/api/projects`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    return {
      props: {
        error: 'Impossible de charger les projets :(',
        educations: []
      },
    };
  }

  const projects: Array<Project> = await res.json();

  return {
    props: {
      projects: projects,
      error: null
    },
  };
}

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <Head>
        <title>Florent Damiens - Projets</title>
        <meta property="description" content="Mes différents projets" />
        <meta property="og:title" content="Florent Damiens - Projets" key="title" />
        <meta property="og:description" content="Mes différents projets" key="description" />
      </Head>

      {page}
    </AppLayout>
  )
}

export default ProjectPage;
