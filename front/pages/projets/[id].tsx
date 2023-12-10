import {ReactElement, useMemo, useState} from "react";
import Head from "next/head";
import ProjectLayout from "../../components/app/layout/ProjectLayout";
import {useRouter} from "next/router";
import {NextPageWithLayout} from "../_app";
import {Project} from "../../types/project";
import SocialNetwork from "../../components/app/common/SocialNetwork";

type ProjectDetailPageProps = {
    projects: Array<Project>;
    currentProjectIndex: number;
    error: null | string;
}

const ProjectDetailPage: NextPageWithLayout<ProjectDetailPageProps> = ({ projects, error, currentProjectIndex }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(currentProjectIndex);

  const currentProject: Project | null = useMemo(() => {
    if (currentIndex === -1) {
      return null;
    }

    return projects[currentIndex];
  }, [currentIndex]);

  return (
    <div className="cbp-popup-content-wrap">
      <div className="cbp-popup-content">
        <div className="col-md-8 col-md-offset-2 portfolio-content text-center">
          {error && (
            <div className="col-lg-12 col-md-12 col-xs-12">
              <p className="little-text">{error}</p>
            </div>
          )}
          {!error && currentProject && (
            <>
              <h1 className="blog-title">{currentProject.name}</h1>
              <figure className="top_45 bottom_45">
                <img src={currentProject.primaryImage.contentUrl} alt="Mon projet" />
              </figure>

              <div className="section-title bottom_30">
                <span></span>
                <h2>A propos de mon projet</h2>
              </div>
              <div className="text-left" dangerouslySetInnerHTML={{ __html: currentProject.description }} />
              <br/>
              <p>
                <span>Année :</span> {currentProject.year}
              </p>
              <p>
                <span>URL :</span> {currentProject.url}
              </p>
              <br/>
              {currentProject.url && (
                <a target="_blank" href={currentProject.url}>
                  <button className="site-btn top_15 bottom_30">Voir mon site</button>
                </a>
              )}

              <figure className="top_45 bottom_45">
                <img src={currentProject.secondaryImage.contentUrl} alt="Mon projet" />
              </figure>
              <SocialNetwork />
            </>
          )}
        </div>
        <div className="cbp-popup-navigation-wrap">
          <div className="cbp-popup-navigation">
            <div className="cbp-popup-close" onClick={() => router.push('/projets')}></div>
            {currentIndex != 0 && (
              <div className="cbp-popup-prev" onClick={() => setCurrentIndex(currentIndex - 1)}></div>
            )}
            {currentIndex + 1 < projects.length && (
              <div className="cbp-popup-next" onClick={() => setCurrentIndex(currentIndex + 1)}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res: Response = await fetch(`${process.env.API_URL}/api/projects`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    return {
      props: {
          error: 'Impossible de charger le projet :(',
          currentProjectIndex: -1,
          projects: []
      },
    };
  }

  const projects: Array<Project> = await res.json();

  const currentProjectIndex = projects.findIndex((project: Project) => project.id == context.query.id);

  return {
    props: {
      projects: projects,
      currentProjectIndex: currentProjectIndex,
      error: currentProjectIndex === -1 && 'Impossible de charger le projet :('
    },
  };
}

ProjectDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProjectLayout>
      <Head>
        <title>Florent Damiens - Mes projets</title>
        <meta property="description" content="Mes projets" />
        <meta property="og:title" content="Florent Damiens - Mes projets" key="title" />
        <meta property="og:description" content="Mes projets" key="description" />
      </Head>

      {page}
    </ProjectLayout>
  )
}

export default ProjectDetailPage;
