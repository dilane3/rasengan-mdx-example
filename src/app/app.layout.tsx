import React from "react";
import { Outlet, LayoutComponent } from "rasengan";

const AppLayout: LayoutComponent = () => {
  return (
		<section className='dark bg-[#171717]'>
			<div className='max-w-[1000px] mx-auto py-10 px-4 lg:px-[150px]'>
				<Outlet />
			</div>
		</section>
	);
};

AppLayout.path = "/";

export default AppLayout;