import { defineConfig } from "rasengan";
import mdx from "@rasenganjs/mdx";

export default defineConfig(async () => {
	return {
		reactStrictMode: true,

		vite: {
			plugins: [mdx()],
		},
	};
});
