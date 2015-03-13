// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, domNode, result){

	domNode = domNode || document
	result = result || [];
	
    var children = domNode.children;
    for(var i = 0; i < children.length; i++) {
      if(children[i].classList.contains(className)) {
        result.push(children[i]);
      }
      if(children[i].hasChildNodes) {
        getElementsByClassName(className, children[i], result);
      }
    }
  return result;
};


