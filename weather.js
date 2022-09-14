#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";
import { MESSAGES_ERRORS, SETTINGS_DICTIONARY } from "./services/const.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError(MESSAGES_ERRORS.save_token_err);
    return;
  }
  try {
    await saveKeyValue(SETTINGS_DICTIONARY.token, token);
    printSuccess("Токен сохранен");
  } catch (e) {
    printError(e.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.s) {
    saveKeyValue(SETTINGS_DICTIONARY.city, args.s);
  } else if (args.h) {
    printHelp();
  } else if (args.t) {
    return saveToken(args.t);
  }

  getWeather("London");
  // weather show
};

initCLI();
