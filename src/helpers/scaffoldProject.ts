import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "../consts.js";
import { InstallerOptions } from "../installers/index.js";

export const scaffoldProject = ({ projectName }: InstallerOptions) => {
  const srcDir = path.join(PKG_ROOT, "template");
  const projectDir = path.join(PKG_ROOT, "created", projectName);

  fs.copySync(srcDir, projectDir);

  console.log({ srcDir, projectDir });
};
