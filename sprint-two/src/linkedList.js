var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;


  list.addToTail = function(value) {
    var new_Node = Node(value); //create new node

    if( !list.head && !list.tail) { // if it is 1st node
      list.head = new_Node; //1st node is head and tail
      list.tail = new_Node;
    } else {
      list.tail.next = new_Node; //add node to the back
      list.tail = list.tail.next; // reset tail to last node
    }

    list.length++; //increase length count

  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//LinkedList and Node are both constructors in the functional pattern