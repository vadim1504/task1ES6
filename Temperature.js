import Converter from './Converter.js'
export default class extends Converter{
    convert(value){
        if(this.k==0)
            return (value*1.8)+32;
        return (value-32)/1.8;
    }
}
