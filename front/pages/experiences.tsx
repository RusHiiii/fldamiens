import {ReactElement, useState} from "react";
import AppLayout from "../components/app/layout/AppLayout";
import Head from "next/head";
import IconGraduation from "../components/app/icons/IconGraduation";
import IconSuitcase from "../components/app/icons/IconSuitcase";

function ExperiencePage() {
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
                  <ul className="timeline col-md-12 top_30">
                    <li>
                      <i>
                        <IconSuitcase width="1.25em" height="1.25em" />
                      </i>
                      <h2 className="timeline-title">Expériences professionnelles</h2>
                    </li>
                    <li>
                      <h3 className="line-title">Art Director - Facebook Inc</h3>
                      <span>2010 - Present</span>
                      <p className="little-text">Nunc varius enim sit amet rhoncus lacinia. Phasellus ornare sodales
                        mauris. Fusce cursus commodo malesuada. Aliquam commodo scelerisque mi et tempor. Etiam
                        suscipit, eros finibus dignissim lobortis, nibh leo cursus lectus, sed hendrerit justo tellus
                        non est. Nulla facilisi. Maecenas id dolor eget tellus vestibulum mollis. Fusce luctus nisi
                        non urna condimentum aliquam. Ut lorem turpis, laoreet quis elit at, faucibus viverra
                        felis.</p><br/>
                      <p className="little-text">Donec non pulvinar turpis. Nam quis faucibus elit. Suspendisse eget
                        velit sed nisl pharetra pharetra a vel mi. In tristique, arcu eget posuere suscipit, erat ante
                        aliquet nunc, sed ultrices tortor magna at massa. Vestibulum viverra sodales leo, id egestas
                        ex luctus at. Donec commodo viverra purus a eleifend. Donec vitae nunc consectetur, suscipit
                        nisl at, porta est.</p>
                    </li>
                    <li>
                      <h3 className="line-title">Senior Designer - Google</h3>
                      <span>2008 - 2010</span>
                      <p className="little-text">Nunc varius enim sit amet rhoncus lacinia. Phasellus ornare sodales
                        mauris. Fusce cursus commodo malesuada. Aliquam commodo scelerisque mi et tempor. Etiam
                        suscipit, eros finibus dignissim lobortis, nibh leo cursus lectus, sed hendrerit justo tellus
                        non est. Nulla facilisi. Maecenas id dolor eget tellus vestibulum mollis. Fusce luctus nisi
                        non urna condimentum aliquam. Ut lorem turpis, laoreet quis elit at, faucibus viverra
                        felis.</p><br/>
                      <p className="little-text">Donec non pulvinar turpis. Nam quis faucibus elit. Suspendisse eget
                        velit sed nisl pharetra pharetra a vel mi. In tristique, arcu eget posuere suscipit, erat ante
                        aliquet nunc, sed ultrices tortor magna at massa. Vestibulum viverra sodales leo, id egestas
                        ex luctus at. Donec commodo viverra purus a eleifend. Donec vitae nunc consectetur, suscipit
                        nisl at, porta est.</p>
                    </li>
                    <li>
                      <h3 className="line-title">Junior Designer - Creative Shake</h3>
                      <span>2005 - 2008</span>
                      <p className="little-text">Nunc varius enim sit amet rhoncus lacinia. Phasellus ornare sodales
                        mauris. Fusce cursus commodo malesuada. Aliquam commodo scelerisque mi et tempor. Etiam
                        suscipit, eros finibus dignissim lobortis, nibh leo cursus lectus, sed hendrerit justo tellus
                        non est. Nulla facilisi. Maecenas id dolor eget tellus vestibulum mollis. Fusce luctus nisi
                        non urna condimentum aliquam. Ut lorem turpis, laoreet quis elit at, faucibus viverra
                        felis.</p><br/>
                      <p className="little-text">Donec non pulvinar turpis. Nam quis faucibus elit. Suspendisse eget
                        velit sed nisl pharetra pharetra a vel mi. In tristique, arcu eget posuere suscipit, erat ante
                        aliquet nunc, sed ultrices tortor magna at massa. Vestibulum viverra sodales leo, id egestas
                        ex luctus at. Donec commodo viverra purus a eleifend. Donec vitae nunc consectetur, suscipit
                        nisl at, porta est.</p>
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
                    <img src="images/itn.png" alt=""/>
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
