import moment from "moment";
import {useMemo} from "react";

function Footer() {
  const currentYear = useMemo(() => {
    return moment().year();
  }, []);

  return (
    <footer>
      <div className="footer col-md-12 top_30 bottom_30">
        <div className="name col-md-4 hidden-md hidden-sm hidden-xs">Florent Damiens.</div>
        <div className="copyright col-lg-8 col-md-12">Copyright © {currentYear} - Tous droits réservés.</div>
      </div>
    </footer>
  );
}

export default Footer;
