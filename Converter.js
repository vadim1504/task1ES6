export default class {
    constructor(k){
        this.k=k;
    }
    convert(value){
        let result;
        if(typeof value == "string" && arguments.length == 1){
            result="";
            result += value * this.k;
        }else if(typeof value == "number" && arguments.length == 1){
            result=0;
            result += value * this.k;
        }else {
            if(typeof value == "object"){
                result = [];
                let array = arguments[0];
                for (var i = 0; i < array.length; i++) {
                    result[i] = array[i]*this.k;
                }
            }else {
                result = "";
                for (var i = 0; i < arguments.length; i++) {
                    result += arguments[i] * this.k + " ";
                }
            }
        }
        return result;
    }
}
