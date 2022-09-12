#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if(args.s) {
    // save city
  } else if(args.h) {
    // help
  } else if(args.t) {
    // save token
  }

  // weather show
};

initCLI();