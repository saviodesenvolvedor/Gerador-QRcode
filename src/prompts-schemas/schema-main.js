import chalk from "chalk"
// Configuração do prompt //
const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta: (1 - QRCODE ou (2 - PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Ops...Escolha apenas entre 1 e 2!"),
        require: true,
    }
]
// EXPORT //
export default promptSchemaMain;