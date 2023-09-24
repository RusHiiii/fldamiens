import IconHome from "../icon/IconHome";
import IconPlane from "../icon/IconPlane";
import IconBars from "../icon/IconBars";
import Link from "next/link";
import IconTwitter from "../icon/IconTwitter";
import IconLinkedin from "../icon/IconLinkedin";
import IconGithub from "../icon/IconGithub";

function Menu() {
  return (
    <header className="col-md-12">
      <nav>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-8 col-xs-4">
            <ul className="tabs">
              <li className="tab">
                <Link className="home-btn" href="/">
                  <IconHome width="1.5em" height="1.5em" />
                </Link>
              </li>
              <li className="tab">
                <Link href="/formations">ETUDES</Link>
              </li>
              <li className="tab">
                <Link href="/experiences">EXPERIENCES</Link>
              </li>
              <li className="tab">
                <Link href="/portfolio">PROJETS</Link>
              </li>
              <li className="tab">
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-8 hidden-md dynamic">
            <a href="mailto:damiens.florent@orange.fr" className="pull-right site-btn icon hidden-xs contact-me hidden-md">
              Me contacter
              <div className="rounded">
                <IconPlane width="0.8em" height="0.8em" />
              </div>
            </a>
            <div className="hamburger pull-right hidden-lg hidden-md">
              <IconBars width="1em" height="1em" />
            </div>
            <div className="hidden-md social-icons pull-right">
              <Link className="tw" href="https://twitter.com/RusHiiiiiiii" target="_blank">
                <IconTwitter width="1em" height="1em" />
              </Link>
              <Link className="lnk" href="https://fr.linkedin.com/in/florent-damiens-939a49164" target="_blank">
                <IconLinkedin width="1em" height="1em" />
              </Link>
              <Link className="gh" href="https://github.com/RusHiiii" target="_blank">
                <IconGithub width="1em" height="1em" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
