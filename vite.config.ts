import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [solid()],
    base: "/FMC-Job-listings-with-filtering/",
});
