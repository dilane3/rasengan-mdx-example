import React from "react";
import { Outlet, LayoutComponent } from "rasengan";

const AppLayout: LayoutComponent = () => {
  return (
		<section className='dark bg-[#171717]'>
			<div className='px-4 max-w-[1000px] mx-auto py-10'>
				<Outlet />
			</div>
		</section>
	);
};

AppLayout.path = "/";

export default AppLayout;