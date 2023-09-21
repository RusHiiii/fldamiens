import {ReactElement} from "react";
import AppLayout from "../components/app/layout/AppLayout";
import Head from "next/head";
import IconHome from "../components/app/icon/IconHome";
import IconHtml from "../components/app/icon/IconHtml";

function HomePage() {
  return (
    <div className="col-md-12">
      <div id="content" className="panel-container">
        <div id="home">
          <div className="row">
            <section className="about-me line col-md-12 padding_30 padbot_45">
              <div className="section-title">
                <span></span>
                <h2>A propos</h2>
              </div>
              <p className="top_30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet vitae ex lacinia sagittis. Vestibulum ultrices nisl mauris, sed dictum quam egestas ac. Curabitur eu mi magna. Aliquam et faucibus eros. Morbi tincidunt fermentum enim a tincidunt. Suspendisse potenti. Pellentesque vel dui arcu.
                <br/><br/>
                Curabitur eu iaculis nibh, eu tempus sem. Donec nec laoreet sem, in tempus libero. Suspendisse potenti. Nulla facilisi. Nunc ultrices eu nisi rhoncus consequat. Duis ut porttitor ante, sit amet malesuada elit. Proin cursus turpis sem, vel feugiat nisi accumsan quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque laoreet enim sit amet odio vulputate, sit amet lobortis arcu fermentum.
              </p>
            </section>
          </div>

          <div className="row">
            <section className="services line graybg col-md-12 padding_50 padbot_50">
              <div>
                <div className="section-title bottom_45">
                  <span></span>
                  <h2>Mes compétences</h2>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service">
                      <div className="icon">
                        <IconHtml width="5em" height="5em" />
                      </div>
                      <span className="title">Symfony / PHP</span>
                      <p className="little-text">Développement Back-End</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service">
                      <div className="icon">
                        <img src="images/website.png" alt=""/>
                      </div>
                      <span className="title">React.js / Next.js</span>
                      <p className="little-text">Développement Front-End</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service">
                      <div className="icon">
                        <img src="images/hosting.png" alt=""/>
                      </div>
                      <span className="title">Chef / Grafana</span>
                      <p className="little-text">Monitoring et gestion d'une infrastructure</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service">
                      <div className="icon">
                        <img src="images/database.png" alt=""/>
                      </div>
                      <span className="title">PostgreSQL / MySQL</span>
                      <p className="little-text">Développement Front-End depuis 5 ans.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="sbn-list">
                    <div className="sbn sbn-bullet">
                      <ul>
                        <li><a className="is-active" href="#">1</a></li>
                        <li><a href="#">2</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="row">
            <section className="design-skills col-md-6 padding_60 padbot_50">
              <div className="section-title bottom_45">
                <span></span>
                <h2>Atouts</h2>
              </div>
              <ul className="skill-list">
                <li>
                  <h3>Curieux</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '80%'}}></div>
                  </div>
                </li>
                <li>
                  <h3>Rigoureux</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '80%'}}></div>
                  </div>
                </li>
                <li>
                  <h3>Esprit d'équipe</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '80%'}}></div>
                  </div>
                </li>
              </ul>
            </section>
            <section className="code-skills col-md-6 padding_60">
              <div className="section-title bottom_45">
                <span></span>
                <h2>Centre d'intérêt</h2>
              </div>
              <ul className="skill-list">
                <li>
                  <h3>Ski</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '100%'}}></div>
                  </div>
                </li>
                <li>
                  <h3>Photo / Astrophoto</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '80%'}}></div>
                  </div>
                </li>
                <li>
                  <h3>Randonnée</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '80%'}}></div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <Head>
        <title>Florent Damiens - Accueil</title>
        <meta property="og:title" content="Florent Damiens - Accueil" key="title" />
      </Head>

      {page}
    </AppLayout>
  )
}

export default HomePage;
