export const SETTINGS_DICTIONARY = {
  city: "city",
  token: "token",
};

export const MESSAGES_ERRORS = {
  save_token_err: "Не передан токен!",
  save_city_err: "Не передан город",
  get_token_err:
    "Не задан ключ API. Задайте его с помощью команды -t [API_KEY]",
  city_not_found: "Неверно указан город",
  token_invalid: "Неверно указан токен",
};

export const MESSAGES_SUCCESS = {
  save_token: "Токен сохранен",
  save_sity: "Город сохранен",
};

export const WEATHER_ICONS = {
  "01": "☀",
  "02": "🌥",
  "03": "☁",
  "04": "☁",
  "09": "🌧",
  "10": "🌦",
  "11": "🌩",
  "13": "🌨",
  "50": "🌫",
};

export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
