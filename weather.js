#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if (args.s) {
    // save city
  } else if (args.h) {
    printHelp();
  } else if (args.t) {
    // save token
  }

  // weather show
};

initCLI();
