define(
  'Controller',
  ['Model', 'View', 'jquery'],
  function() {
    function Controller(model, view) {
      var self = this;

      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.edit_btn', editItem);
      view.elements.listContainer.on('click', '.save_btn', updateItem);
      view.elements.listContainer.on('click', '.delete_btn', removeItem);

      function addItem() {
        var newItem = view.elements.input.val();

        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function editItem() {
        var editInput = $(this).siblings('.edit_task');
        var item = $(this).siblings('.task_text').text();
        var itemBlock = $(this).siblings('.task_text');
        editInput.val(item);
        editInput.show();
        itemBlock.hide();
        $(this).hide();
        $(this).prev().css('display', 'inline-block');
      }

      function updateItem() {
        var editInput = $(this).siblings('.edit_task');
        var currentItemIndex = $(this).parent().index();
        var updatedIitem = editInput.val();

        model.updateItem(currentItemIndex, updatedIitem);
        view.renderList(model.data);
      }

      function removeItem() {
        var item = $(this).siblings('.task_text').text();

        model.removeItem(item);
        view.renderList(model.data);
      }
    }
    return Controller;
  }
);
