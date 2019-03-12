/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result= input.replace(/[^0-9./,]+/g, "")||1;
    if(/[/]/.test(result)){
        var calc = result.split('/');
        result = calc[0]/calc[1];
       }
    return result;
  };
  
  this.getUnit = function(input) {
    var result= input.replace(/[0-9./,]+/g, "").toLowerCase();
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const matric = ["gal","lbs","mi"];
    const imperial = ["lit","kg","km"];
    var result;
    if(matric.includes(initUnit)){
      result =  imperial[matric.indexOf(initUnit)];
    }else if(imperial.includes(initUnit)){
      result =  matric[imperial.indexOf(initUnit)];
    }else{
      result = 'invalid unit';
    }
    
    
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    if(initUnit == "mi"){
      result = initNum*miToKm;

    }else if(initUnit == "km"){
      result = initNum/miToKm;
    
    }else if(initUnit == "lbs"){
      result = initNum*lbsToKg;
    
    }else if(initUnit == "kg"){
      result = initNum/lbsToKg;
    
    }else if(initUnit == "lit"){
      result = initNum/galToL;
    
    }else if(initUnit == "gal"){
      result = initNum*galToL;
    
    }else{
      result = "Invalid";
      
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    var iUnit;
    var rUnit;
    
    if(initUnit=='mi'){
      iUnit = "miles";
      rUnit = "kilometers";
    }else if(initUnit=='km'){
         iUnit = "kilometers";
      rUnit = "miles";    
    }else if(initUnit=='gal'){
         iUnit = "gallon";
      rUnit = "liters";    
    }else if(initUnit=='lit'){
         iUnit = "liters";
      rUnit = "gallon";    
    }else if(initUnit=='lbs'){
         iUnit = "pounds";
      rUnit = "kilograms";    
    }else if(initUnit=='kg'){
         iUnit = "kilograms";
      rUnit = "pounds";    
    }else {
         iUnit = "invalid unit";
      rUnit = "invalid unit";    
    }
    
    var result = initNum+" "+ iUnit +" converts to "+" "+returnNum.toFixed(2)+" "+ rUnit;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
