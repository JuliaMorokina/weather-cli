#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import { getKeyValue, saveKeyValue } from "./services/storage.service.js";
import { getIcon, getWeather } from "./services/api.service.js";
import {
  MESSAGES_ERRORS,
  MESSAGES_SUCCESS,
  SETTINGS_DICTIONARY,
} from "./services/const.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError(MESSAGES_ERRORS.save_token_err);
    return;
  }
  try {
    await saveKeyValue(SETTINGS_DICTIONARY.token, token);
    printSuccess(MESSAGES_SUCCESS.save_token);
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError(MESSAGES_ERRORS.save_city_err);
    return;
  }
  try {
    await saveKeyValue(SETTINGS_DICTIONARY.city, city);
    printSuccess(MESSAGES_SUCCESS.save_sity);
  } catch (e) {
    printError(e.message);
  }
};

const getForcast = async () => {
  const city = await getKeyValue(SETTINGS_DICTIONARY.city);
  try {
    const weather = await getWeather(city);
    const icon = getIcon(weather.weather[0].icon);
    printWeather(weather, icon);
  } catch (e) {
    if (e?.response?.status === 404) {
      printError(MESSAGES_ERRORS.city_not_found);
    } else if (e?.response?.status === 401) {
      printError(MESSAGES_ERRORS.token_invalid);
    } else {
      printError(e?.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.s) {
    return saveCity(args.s);
  } else if (args.h) {
    return printHelp();
  } else if (args.t) {
    return saveToken(args.t);
  }

  return getForcast();
};

initCLI();
