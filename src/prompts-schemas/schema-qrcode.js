import chalk from "chalk"

const promptSchemaQRcode = [
    {
        name: "link",
        description: chalk.cyan("Digite o link para gerar o QRCODE: ")
    },
    {
        name: "type",
        description: chalk.bgBlack.red("Escolha entre o tipo de QRCODE: (1 - IMAGEM ou (2 - TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Ops...Você só pode escolher entre 1 e 2"),
        required: true
    }
]

export default promptSchemaQRcode;