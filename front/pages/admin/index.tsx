import type { NextPage } from "next";
import dynamic from "next/dynamic";
import {CssBaseline} from "@mui/material";

const App = dynamic(() => import("../../components/admin/Admin"), { ssr: false });

const Admin: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <App />
    </>
  );
};

export default Admin;
