import { RouterComponent, defineRouter } from "rasengan";
import Home from "@/app/home.page";
import AppLayout from "@/app/app.layout";
import Blog from "@/app/blog.page.mdx";
import Game from "@/app/game.page";
import { MDXRenderer } from "@rasenganjs/mdx";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home, Blog, Game],
  MDXRenderer
})(AppRouter);
