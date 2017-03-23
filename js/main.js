require.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});

require(
  [
    'jquery',
    'Model',
    'View',
    'Controller',
  ],
  function($, Model, View, Controller) {
    var firstToDoList = ['Learn JS', 'Improve my english', 'Learn ES6', 'Learn React', 'Learn SQL'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
  }
);
