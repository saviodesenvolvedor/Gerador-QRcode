// NPM //
import prompt from "prompt"
import chalk from "chalk"
// IMPORT //
import promptSchemaMain from "./prompts-schemas/schema-main.js"
import createQRcode from "./sevices/qr-code/create.js"
import createPassword from "./sevices/password/create.js"


async function main(){
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(err){console.log(err)}
        if(choose.select == 1) await createQRcode();
        if(choose.select == 2) await createPassword();
    })
  
    prompt.start()    
}

main()