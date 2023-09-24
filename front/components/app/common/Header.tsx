import IconHome from "../icons/IconHome";
import IconPlane from "../icons/IconPlane";
import IconBars from "../icons/IconBars";
import Link from "next/link";
import IconTwitter from "../icons/IconTwitter";
import IconLinkedin from "../icons/IconLinkedin";
import IconGithub from "../icons/IconGithub";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

function Menu() {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    setShowMobileMenu(false)
  }, [router.asPath]);

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
              <li className={router.pathname == "/formations" ? "tab active" : "tab"}>
                <Link href="/formations">ETUDES</Link>
              </li>
              <li className={router.pathname == "/experiences" ? "tab active" : "tab"}>
                <Link href="/experiences">EXPERIENCES</Link>
              </li>
              <li className={router.pathname == "/projets" ? "tab active" : "tab"}>
                <Link href="/projets">PROJETS</Link>
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
            <div className="hamburger pull-right hidden-lg hidden-md" onClick={() => setShowMobileMenu(!showMobileMenu)}>
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
        {showMobileMenu && (
          <div className="hidden-lg hidden-md">
            <div className="menuout">
              <div className="menuin">
                <ul className="tabs">
                  <li className="tab">
                    <Link className="home-btn" href="/">
                      <IconHome width="1.5em" height="1.5em" />
                    </Link>
                  </li>
                  <li className={router.pathname == "/formations" ? "tab active" : "tab"}>
                    <Link href="/formations">ETUDES</Link>
                  </li>
                  <li className={router.pathname == "/experiences" ? "tab active" : "tab"}>
                    <Link href="/experiences">EXPERIENCES</Link>
                  </li>
                  <li className={router.pathname == "/projets" ? "tab active" : "tab"}>
                    <Link href="/projets">PROJETS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Menu;
