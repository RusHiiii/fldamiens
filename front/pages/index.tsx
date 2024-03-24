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
                Curieux et intéressé par le monde de l&apos;informatique depuis longtemps, j&apos;ai décidé d&apos;orienter mes études dans ce domaine. La découverte du web pendant mes années de lycée a renforcé mon idée de travailler dans ce secteur. D&apos;abord en réalisant un DUT Informatique à Clermont-Ferrand puis en me spécialisant dans le développement d&apos;applications Web grâce à la licence professionnelle ‘Développement d&apos;Application Web’ toujours sur Clermont-Ferrand.
                <br/><br/>
                Grâce à l&apos;alternance, j&apos;ai eu l’occasion de découvrir le monde du e-commerce en rejoignant le pôle informatique de Glisshop en 2017. À cette période, l&apos;entreprise étant en pleine restructuration de son SI, j&apos;ai eu la chance de travailler sur de gros projets, comme la mise en place du nouveau site, de l&apos;ERP, du WMS....
                <br/><br/>
                J&apos;ai ensuite rejoint les équipes de développement d&apos;ITNetwork en 2019, j&apos;ai eu l&apos;occasion de travailler sur de nombreuses applications, dont une GED pour une importante étude notariale sur Paris, mais aussi le développement d&apos;applications plus spécifiques dans le domaine de l&apos;hôtellerie ou dans le domaine de la communication. J&apos;ai aussi participé à la maintenance et à l&apos;évolution de nos outils de monitoring et de provisionning de machines.
                <br/><br/>
                Je suis l&apos;actualité notamment sur Symfony, mais pas que, et j&apos;assiste à des conférences techs une ou deux fois dans l&apos;année, comme le forum PHP, Volcamp, Mixit… J&apos;en profite toujours pour rédiger quelques articles sur le blog d&apos;ITNetwork, comme à <a href="https://www.itnetwork.fr/blog/mixit-crepes" target="_blank">Mixit</a> ou à <a href="https://www.itnetwork.fr/blog/retour-volcamp" target="_blank">Volcamp</a>.
                J&apos;ai posté d&apos;autres articles bien différents comme sur le <a href="https://www.itnetwork.fr/blog/machine-learning-rex" target="_blank">deep learning</a> dans le cadre d&apos;une de nos applications.
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
                        <p className="little-text">Gestion et monitoring d&apos;une infrastructure</p>
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
                        <p className="little-text">Système d&apos;exploitation (Debian / Ubuntu)</p>
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
                  <h3>Esprit d&apos;équipe</h3>
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
                <h2>Centres d&apos;intérêt</h2>
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
