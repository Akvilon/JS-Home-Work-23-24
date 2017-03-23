define(
  'View',
  ['jquery', 'tmpl'],
  function() {
    function View(model) {
      var self = this;

      function init() {
        var wrapper = tmpl($('#wrapper-template').html());

        $('body').append(wrapper);
        self.elements = {
          input: $('.item-value'),
          addBtn: $('.add_btn'),
          editBtn: $('.edit_btn'),
          saveBtn: $('.save_btn'),
          listContainer: $('.item-list')
        };
        self.renderList(model.data);
      };

      self.renderList = function(data) {
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
      };

      init();
    }
    return View;
  }
);
