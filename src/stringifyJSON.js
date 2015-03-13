// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if(typeof obj === "number" || typeof obj === "boolean"){
		var newVal = obj.toString();
		return newVal;
	}
	if(obj === null){
		return "null";
	}
	if(typeof obj === "string"){
		return '"' + obj + '"';
	}
	if(Array.isArray(obj)){
		if(obj[0] === undefined){
		return "[]";
		}	
		var stringArr = [];
		obj.forEach(function(element){
			stringArr.push(stringifyJSON(element));
		});
		return "[" + stringArr + "]";
	}
	if (typeof obj === "object") {
		var arrOfKeyVals = [];
        var objKeys = [];
        objKeys = Object.keys(obj);
        objKeys.forEach(function(key) {
            var keyOut = '"' + key + '":';
            var keyValOut = obj[key];
            if (typeof keyValOut === "function" || typeof keyValOut === undefined) {
                arrOfKeyVals.push('');
            } else if (typeof keyValOut === 'string') {
                arrOfKeyVals.push(keyOut + '"' + keyValOut + '"');
            } else if (typeof keyValOut === 'boolean' || keyValOut === null){
                arrOfKeyVals.push(keyOut + keyValOut);
            } else if (typeof keyValOut === "object") {
                arrOfKeyVals.push(keyOut + stringifyJSON(keyValOut));
            }
        });
        return '{' + arrOfKeyVals + '}';
    }
};


