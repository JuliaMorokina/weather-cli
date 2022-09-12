#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.s) {
    saveKeyValue("city", args.s);
  } else if (args.h) {
    printHelp();
  } else if (args.t) {
    saveKeyValue("token", args.t);
  }

  // weather show
};

initCLI();
