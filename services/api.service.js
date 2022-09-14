import https from "https";
import { getKeyValue } from "./storage.service.js";
import { BASE_URL, MESSAGES_ERRORS, SETTINGS_DICTIONARY, WEATHER_ICONS } from "./const.js";
import axios from "axios";

const getIcon = (iconName) => {
  const key = iconName.slice(0, -1);
  const icon = WEATHER_ICONS[key];
  return icon;
}

const getToken = async () => {
  const token = await getKeyValue(SETTINGS_DICTIONARY.token);

  if (!token) {
    throw new Error(MESSAGES_ERRORS.get_token_err);
  }

  return token;
};

const getUrl = async (params) => {
  const url = new URL(BASE_URL);
  const token = await getToken();

  const urlParams = {
    ...params,
    appid: token,
    lang: "ru",
    units: "metric",
  };

  Object.keys(urlParams).forEach((key) => {
    url.searchParams.append(key, urlParams[key]);
  });

  return url;
};

const getWeatherHttps = async (city) => {
  const url = await getUrl({ q: city });

  https.get(url, (response) => {
    let res = "";
    response.on("data", (chunk) => {
      res += chunk;
    });

    response.on("end", () => {
      console.log(res);
    });
  });
};

const getWeather = async (city) => {
  const token = await getToken();

  const { data } = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: token,
      lang: "ru",
      units: "metric",
    },
  });
  return data;
};

export { getWeather, getIcon };
