import chalk from "chalk";
import dedent from "dedent-js";

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

export { printError, printHelp, printSuccess };
