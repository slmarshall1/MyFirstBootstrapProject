$(function () {
    
    // Obtain a canvas drawing surface from fabric.js
    var canvas = new fabric.Canvas('c');
 
    // Create a text object. 
    // Does not display it-the canvas doesn't 
    // know about it yet.
    var hi = new fabric.Text('hello, world.', {
      left: canvas.getWidth() / 2,
      top: canvas.getHeight() / 2   
    });
  
    // Attach it to the canvas object, then (re)display
    // the canvas.  
    canvas.add(hi);
        
  });