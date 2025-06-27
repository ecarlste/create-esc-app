#!/usr/bin/env node
import { intro, isCancel, outro, text } from "@clack/prompts";
import { validateAppName } from "./utils/validateAppName.js";
import { scaffoldProject } from "./helpers/scaffoldProject.js";

const main = async () => {
  intro(`create-esc-app`);

  const appName = await text({
    message: "What is the name of the project?",
    placeholder: "my-esc-app",
    validate: validateAppName,
  });

  if (isCancel(appName)) {
    outro("create-esc-app cancelled...");
  } else {
    scaffoldProject({ projectName: appName });
    outro(`Your esc-app '${appName.toString()}' hass been successfully created!`);
  }
};

try {
  main();
} catch (err) {
  console.error("Aborting installation...");

  if (err instanceof Error) {
    console.error(err);
  } else {
    console.error("An unknown error has occurred. Please open an issue on github with the text below:");
    console.log(err);
    process.exit(1);
  }
}
