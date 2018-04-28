

var HashTable = function() {
  
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
  
};

HashTable.prototype.insert = function(k, v) {
  //put key through hashing function
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //use get to take in index and declare bucket variable
  var bucket = this._storage.get(index)
  
  //use set to take in index and value to store value in bucket

  //access bucket at index and make it equal to set with input index and value
  this._storage.set(index, v)
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //use get to find place on storage array
  //return the value of get(i)
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  
  this._storage.each(function(ele) {
      
  })
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


