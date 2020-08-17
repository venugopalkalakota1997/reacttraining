const lastnamereducer = function lastnameClicked(state = null, valuelast) {
    switch (valuelast.type) {
        case 'lastname':
            
            return valuelast.payload;
    
        default:
            break;
    }
    return state
}
export default lastnamereducer