var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
_.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // set value as target of node
  var node = Tree(value);
  // add node as a child of a tree
  this.children.push(node);
};

treeMethods.contains = function(target) {
  // the value of this node equals target
    //return true else false
  
  
  if(this.value === target) {
      return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(target)) {
        return true;
      }
    }
      return false
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
