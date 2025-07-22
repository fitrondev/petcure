import { Outlet } from "react-router";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
