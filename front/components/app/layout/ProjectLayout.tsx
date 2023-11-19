import {Component, ReactElement} from "react";

function ProjectLayout({children} : {children: ReactElement[]}) {
  return (
    <div className="cbp-popup-wrap cbp-popup-singlePage cbp-popup-singlePage-fade cbp-popup-singlePage-open cbp-popup-transitionend cbp-popup-singlePage-sticky cbp-popup-ready">
      {children}
    </div>
  );
}

export default ProjectLayout;
