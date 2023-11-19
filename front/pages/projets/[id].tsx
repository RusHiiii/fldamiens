import {ReactElement, useState} from "react";
import Head from "next/head";
import Link from "next/link";
import IconTwitter from "../../components/app/icons/IconTwitter";
import IconLinkedin from "../../components/app/icons/IconLinkedin";
import IconGithub from "../../components/app/icons/IconGithub";
import ProjectLayout from "../../components/app/layout/ProjectLayout";
import {useRouter} from "next/router";
import {NextPageWithLayout} from "../_app";

const ProjectDetailPage: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className="cbp-popup-content-wrap">
      <div className="cbp-popup-content">
        <div className="col-md-8 col-md-offset-2 portfolio-content text-center">
          <h1 className="blog-title">Exemag Multiconcept Magazine Theme</h1>
          <figure className="top_45 bottom_45">
            <img src="/images/work-01.jpg" alt="" />
          </figure>
          <div className="section-title bottom_30">
            <span></span>
            <h2>About Project</h2>
          </div>
          <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age
            again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced
            frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did
            ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable
            furniture. </p>
          <br/>
          <p>
            <span>Client:</span> Tavilla Themes
          </p>
          <br/>
          <button className="site-btn top_15 bottom_30">Launch Project.</button>
          <figure className="top_45 bottom_45">
            <img src="/images/work-01.jpg" alt="" />
          </figure>
          <div className="social-share col-md-12 bottom_60 top_15">
            <ul>
              <li>
                <div className="hidden-md social-icons pull-right">
                  <Link className="tw" href="https://twitter.com/RusHiiiiiiii" target="_blank">
                    <IconTwitter width="1.25em" height="1.25em" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="hidden-md social-icons pull-right">
                  <Link className="lnk" href="https://fr.linkedin.com/in/florent-damiens-939a49164" target="_blank">
                    <IconLinkedin width="1.25em" height="1.25em" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="hidden-md social-icons pull-right">
                  <Link className="gh" href="https://github.com/RusHiiii" target="_blank">
                    <IconGithub width="1.25em" height="1.25em" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="cbp-popup-navigation-wrap">
          <div className="cbp-popup-navigation">
            <div className="cbp-popup-close" onClick={() => router.push('/projets')}></div>
            <div className="cbp-popup-next"></div>
            <div className="cbp-popup-prev"></div>
          </div>
        </div>
      </div>
    </div>
  );
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
