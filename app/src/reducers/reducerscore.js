
const scorereducer= function scoreplusclicked(state = 0, scoreplus){
    console.log(scoreplus); 
    switch (scoreplus.type) {
        case 'score':
            state++;
            return state;
    
        default:
            break;
    }
    return state
}
export default scorereducer