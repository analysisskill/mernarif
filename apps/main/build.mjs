import { execSync } from "child_process";
import { cpSync, mkdirSync, existsSync, rmSync } from "fs";
import { join } from "path";

const rootDir = join(import.meta.dirname, "../..");
const publicDir = join(import.meta.dirname, "public");

// All apps to build (Vite apps only - they output to dist/)
const apps = [
  { name: "arifhossain", filter: "arifhossain" },
  { name: "sahamid", filter: "sahamid" },
  { name: "zahangir-alam-litton", filter: "zahangir-alam-litton", dirName: "zahangir alam litton" },
  { name: "Calculator", filter: "Calculator" },
  { name: "ariffullstack", filter: "ariffullstack" },
];

// Clean old public directory
if (existsSync(publicDir)) {
  rmSync(publicDir, { recursive: true });
}
mkdirSync(publicDir, { recursive: true });

console.log("🔨 Building all apps with Turbo...\n");

try {
  const filterArgs = apps.map((a) => `--filter=${a.filter}`).join(" ");
  execSync(`pnpm turbo run build ${filterArgs}`, {
    cwd: rootDir,
    stdio: "inherit",
  });
} catch (e) {
  console.error("❌ Build failed");
  process.exit(1);
}

console.log("\n📦 Copying build outputs to public/...\n");

for (const app of apps) {
  const srcDir = join(rootDir, "apps", app.dirName || app.name, "dist");
  const destDir = join(publicDir, app.name);

  if (existsSync(srcDir)) {
    mkdirSync(destDir, { recursive: true });
    cpSync(srcDir, destDir, { recursive: true });
    console.log(`  ✅ /${app.name}/`);
  } else {
    console.log(`  ⚠️  /${app.name}/ - no dist/ found, skipping`);
  }
}

console.log("\n🎉 Done! All apps are in public/");
