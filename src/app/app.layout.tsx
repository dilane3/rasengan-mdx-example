import React from "react";
import { Outlet, LayoutComponent } from "rasengan";

const AppLayout: LayoutComponent = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <Outlet />
    </section>
  );
};

AppLayout.path = "/";

export default AppLayout;