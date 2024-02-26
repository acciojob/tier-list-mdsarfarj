//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.item');
  const dropZones = document.querySelectorAll('.drop-zone');
  const unrankedDropZone = document.getElementById('unranked-drop-zone');

  let draggedItem = null;

  items.forEach(item => {
    item.addEventListener('dragstart', function(event) {
      draggedItem = event.target;
    });
  });

  dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', function(event) {
      event.preventDefault();
    });

    dropZone.addEventListener('drop', function(event) {
      if (draggedItem) {
        event.preventDefault();
        if (draggedItem.parentElement !== dropZone) {
          dropZone.appendChild(draggedItem);
        }
      }
    });
  });

  unrankedDropZone.addEventListener('dblclick', function(event) {
    if (draggedItem && draggedItem.parentElement !== unrankedDropZone) {
      unrankedDropZone.appendChild(draggedItem);
    }
  });
});
