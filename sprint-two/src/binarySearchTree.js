var BinarySearchTree = function(value) {
 
  var newTree ={}
 
  newTree.left= null;
  newTree.right = null;
  newTree.value = value
  _.extend(newTree, tree_Methods);

  return newTree;
  

};

var tree_Methods = {}



tree_Methods.insert = function (value) {
  if(value < this.value) {
  	if(!this.left){
  		this.left= BinarySearchTree(value);
  	} else {
  		this.left.insert(value);
  	}
  } else if( value > this.value){
  	if(!this.right){
  		this.right = BinarySearchTree(value);
  	} else {
  		this.right.insert(value);
  	}
  }
};

tree_Methods.contains = function (value) {
  debugger;
  if(this.value === value){
    return true;
  }

  if( this.value < value){
    if(!this.right){
      return false;
    } else if(this.right) {
      return this.right.contains(value)
    }
  } 

  if (this.value > value ){
    if(!this.left){
      return false;
    } else if (this.left) {
      return this.left.contains(value);
    }
  } 
  
};

tree_Methods.depthFirstLog = function (cb) {


};

/*
 * Complexity: What is the time complexity of the above functions?
 */
