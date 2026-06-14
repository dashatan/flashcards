import { buildContent } from "./build-content.ts";

try {
  buildContent();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
