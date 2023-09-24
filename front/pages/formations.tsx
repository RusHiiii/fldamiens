import {ReactElement, useState} from "react";
import AppLayout from "../components/app/layout/AppLayout";
import Head from "next/head";
import IconGraduation from "../components/app/icons/IconGraduation";

function FormationPage() {
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
                  <ul className="timeline col-md-12 top_30">
                    <li>
                      <i>
                        <IconGraduation width="1.25em" height="1.25em" />
                      </i>
                      <h2 className="timeline-title">Diplômes et Formations</h2>
                    </li>
                    <li>
                      <h3 className="line-title">Abc University of Los Angeles</h3>
                      <span>2004 - 2009</span>
                      <p className="little-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p><br/>
                      <p className="little-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                    </li>
                    <li>
                      <h3 className="line-title">Drawing Course</h3>
                      <span>2003 - 2004</span>
                      <p className="little-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p><br/>
                      <p className="little-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                    </li>
                    <li>
                      <h3 className="line-title">Abc High School</h3>
                      <span>2000 - 2003</span>
                      <p className="little-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p><br/>
                      <p className="little-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="row">
            <section className="clients col-md-12 graybg padding_45 padbot_45">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="client">
                    <img src="images/itn.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

FormationPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <Head>
        <title>Florent Damiens - Formations</title>
        <meta property="og:title" content="Florent Damiens - Formations" key="title" />
      </Head>

      {page}
    </AppLayout>
  )
}

export default FormationPage;
