import Link from "next/link";
import IconTwitter from "../icons/IconTwitter";
import IconLinkedin from "../icons/IconLinkedin";
import IconGithub from "../icons/IconGithub";

const SocialNetwork = () => {

  return (
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
  );
}

export default SocialNetwork;
