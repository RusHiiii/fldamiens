import {ReactElement, useState} from "react";
import AppLayout from "../components/app/layout/AppLayout";
import Head from "next/head";
import IconPhp from "../components/app/icons/IconPhp";
import IconWeb from "../components/app/icons/IconWeb";
import IconServer from "../components/app/icons/IconServer";
import IconDatabase from "../components/app/icons/IconDatabase";
import IconUml from "../components/app/icons/IconUml";
import IconGit from "../components/app/icons/IconGit";
import {NextPageWithLayout} from "./_app";
import IconLinux from "../components/app/icons/IconLinux";
const HomePage: NextPageWithLayout = () => {
  const [showMainSkill, setShowMainSkill] = useState<boolean>(true);

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
                {showMainSkill && (
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service">
                        <div className="icon">
                          <IconPhp width="5em" height="5em" />
                        </div>
                        <span className="title">Symfony / PHP</span>
                        <p className="little-text">Développement orienté Back-End</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service">
                        <div className="icon">
                          <IconWeb width="5em" height="5em" />
                        </div>
                        <span className="title">React.js / Next.js</span>
                        <p className="little-text">Développement orienté Front-End</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service">
                        <div className="icon">
                          <IconServer width="5em" height="5em" />
                        </div>
                        <span className="title">Chef / Grafana</span>
                        <p className="little-text">Gestion et monitoring d'une infrastructure</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service">
                        <div className="icon">
                          <IconDatabase width="5em" height="5em" />
                        </div>
                        <span className="title">PostgreSQL / MySQL</span>
                        <p className="little-text">Système de gestion de base de données</p>
                      </div>
                    </div>
                  </div>
                )}
                {!showMainSkill && (
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service">
                        <div className="icon">
                          <IconUml width="5em" height="5em" />
                        </div>
                        <span className="title">UML / Merise</span>
                        <p className="little-text">Analyse applicative et de la base de données</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service">
                        <div className="icon">
                          <IconGit width="5em" height="5em" />
                        </div>
                        <span className="title">Git</span>
                        <p className="little-text">Gestionnaire de version (Github)</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="service">
                        <div className="icon">
                          <IconLinux width="5em" height="5em" />
                        </div>
                        <span className="title">Linux</span>
                        <p className="little-text">Système d'exploitation (Debian / Ubuntu)</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="sbn-list">
                    <div className="sbn sbn-bullet">
                      <ul>
                        <li onClick={() => setShowMainSkill(true)}>
                          <a className={showMainSkill ? "is-active" : ""} >1</a>
                        </li>
                        <li onClick={() => setShowMainSkill(false)}>
                          <a className={!showMainSkill ? "is-active" : ""}>2</a>
                        </li>
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
                  <h3>Rigoureux</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '100%'}}></div>
                  </div>
                </li>
                <li>
                  <h3>Esprit d'équipe</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '100%'}}></div>
                  </div>
                </li>
                <li>
                  <h3>Curieux</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '100%'}}></div>
                  </div>
                </li>
              </ul>
            </section>
            <section className="code-skills col-md-6 padding_60">
              <div className="section-title bottom_45">
                <span></span>
                <h2>Centres d'intérêt</h2>
              </div>
              <ul className="skill-list">
                <li>
                  <h3>Ski / Escalade</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '100%'}}></div>
                  </div>
                </li>
                <li>
                  <h3>Photo</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '90%'}}></div>
                  </div>
                </li>
                <li>
                  <h3>Randonnée</h3>
                  <div className="progress">
                    <div className="percentage" style={{width: '90%'}}></div>
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
        <meta property="description" content="Florent Damiens développeur sur Clermont-Ferrand" />
        <meta property="og:title" content="Florent Damiens - Accueil" key="title" />
        <meta property="og:description" content="Florent Damiens développeur sur Clermont-Ferrand" key="description" />
      </Head>

      {page}
    </AppLayout>
  )
}
export default HomePage;
