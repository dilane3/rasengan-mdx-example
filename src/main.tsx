import "@rasenganjs/image/lib/styles/index.css";
import "@/styles/index.css";
import "@/styles/rasengan.css";
import { type AppProps } from "rasengan";
import AppRouter from "@/app/app.router";

export default function App({ children, Component, StrictMode }: AppProps) {
	return (
		<StrictMode>
			<Component router={AppRouter}>{children}</Component>
		</StrictMode>
	);
}
