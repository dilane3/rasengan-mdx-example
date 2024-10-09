import { defineConfig } from "rasengan";
import mdx from "@rasenganjs/mdx";

export default defineConfig({
	server: {
		production: {
			hosting: "vercel",
		},
	},

	vite: {
		plugins: [mdx()],
	},
});
