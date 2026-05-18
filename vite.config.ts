import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

function patchWranglerPlugin() {
  return {
    name: "patch-wrangler-json",
    closeBundle() {
      const wranglerPath = path.resolve("dist/client/wrangler.json");
      if (!fs.existsSync(wranglerPath)) return;
      try {
        const config = JSON.parse(fs.readFileSync(wranglerPath, "utf-8"));
        const flags: string[] = config.compatibility_flags ?? [];
        if (!flags.includes("nodejs_compat")) {
          config.compatibility_flags = [...flags, "nodejs_compat"];
          fs.writeFileSync(wranglerPath, JSON.stringify(config, null, 2));
          console.log("[patch-wrangler] Added nodejs_compat to compatibility_flags");
        }
      } catch (e) {
        console.warn("[patch-wrangler] Could not patch wrangler.json:", e);
      }
    },
  };
}

export default defineConfig({
  plugins: [patchWranglerPlugin()],
});