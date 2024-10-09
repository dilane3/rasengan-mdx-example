import { defineConfig } from "rasengan";
import mdx from "@rasenganjs/mdx";

export default defineConfig(async () => {
	return {
		server: {
			production: {
				hosting: "vercel",
			},
		},

		vite: {
			plugins: [mdx()],
		},
	};
});
