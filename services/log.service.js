import chalk from "chalk";
import dedent from "dedent-js";
import { WEATHER_ICONS } from "./const.js";

const printError = (err) => {
  const errorMessage = `${chalk.bgRed(" ERROR ")} ${err}`;
  console.log(errorMessage);
};

const printSuccess = (message) => {
  const successMessage = `${chalk.bgGreen(" SUCCESS ")} ${message}`;
  console.log(successMessage);
};

const printHelp = () => {
  const helpMessage = dedent`
    ${chalk.bgCyan(" HELP ")} 
    Без параметров - вывод погоды
    -s [CITY] - установка города
    -t [API_KEY] - сохранение токена
    -h - помощь
  `;
  console.log(helpMessage);
};

const printWeather = (data, icon) => {
  const weatherMessage = dedent`
    ${chalk.bgBlue(" WEATHER ")} Погода в городе ${data.name}
    ${icon}  ${data.weather[0].description}
    ${chalk.blue("Температура:")} ${data.main.temp} (ощушается как ${
    data.main.feels_like
  })
    ${chalk.blue("Влажность:")} ${data.main.humidity}%
    ${chalk.blue("Скорость ветра:")} ${data.wind.speed} м/с
  `;
  console.log(weatherMessage);
};

export { printError, printHelp, printSuccess, printWeather };
