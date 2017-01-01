import Length from './Length.js';
import Weight from './Weight.js';
import Temperature from './Temperature.js';
export default class {
    createConverter(obj){
        if(obj.from=="cm"&&obj.to=="mm")
            return new Length(10);
        if(obj.from=="mm"&&obj.to=="cm")
            return new Length(0.1);
        if(obj.from=="cm"&&obj.to=="m")
            return new Length(0.01);
        if(obj.from=="kg"&&obj.to=="g")
            return new Weight(1000);
        if(obj.from=="t"&&obj.to=="kg")
            return new Weight(1000);
        if(obj.from=="t"&&obj.to=="g")
            return new Weight(1000000);
        if(obj.from=="c"&&obj.to=="f")
            return new Temperature(0);
        if(obj.from=="f"&&obj.to=="c")
            return new Temperature(1);
    };
}
