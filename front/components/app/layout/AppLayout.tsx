import Profile from "../common/Profile";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {Component, ReactElement} from "react";

function AppLayout({children} : {children: ReactElement[]}) {
  return (
    <div className="wrapper top_60 container">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <Profile />
        </div>

        <div id="ajax-tab-container" className="col-lg-9 col-md-8 tab-container">
          <div className="row">
            <Header />
            {children}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
