async function permittedCharacter(){
    let permitted = []
    if(process.env.UPPERCAS_LETTERS === "true"){
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if(process.env.LOWCASE_LETTERS === "true"){
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.NUMBERS === "true"){
        permitted.push(..."0123456789")
    }

    if(process.env.SPECIAL_CHARACTERS === "true"){
        permitted.push(..."!@#$%&*><.")
    }
    return permitted;
}

export default permittedCharacter;