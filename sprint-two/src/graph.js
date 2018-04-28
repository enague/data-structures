

// Instantiate a new graph
var Graph = function(value) {
  
  this.nodes = [];
  this.value = value
  this.edges = {}

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  //var node = new Graph(value);
  // this.nodes.push(node);

  // if(!this.nodes[value]){
  //   this.nodes[value] = new Graph(value);
  // }
  debugger;
  this.nodes.push(node);
  this.edges[node]={};
  

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return this.nodes.indexOf(node) !== -1;
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //debugger;
  for(var key in this.edges) {
    if(key === node) {
      delete this.edges[node]
    }
  }

  for (var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i] === node) {
      this.nodes.splice(i,1);
    }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //debugger;
  for(var key in this.edges){
    if(this.edges[fromNode][toNode]) {
      return true;
    } else {
      return false;
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.edges[fromNode][toNode] = true;
  this.edges[toNode][fromNode] = true;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.edges){
    if(key) {
      return cb(this.edges[key]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


