// Get elements
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

// Add event listeners to the draggable element
draggable.addEventListener('dragstart', (e) => {
    // Store the dragged element's ID in the dataTransfer object
    e.dataTransfer.setData('text', e.target.id);
});

// Add event listeners to the drop zone
dropzone.addEventListener('dragover', (e) => {
    // Prevent the default behavior to allow dropping
    e.preventDefault();

    // Add a class to change the background when an item is dragged over the dropzone
    dropzone.classList.add('over');
});

dropzone.addEventListener('dragleave', () => {
    // Remove the class when the dragged item leaves the dropzone
    dropzone.classList.remove('over');
});

dropzone.addEventListener('drop', (e) => {
    // Prevent the default behavior to avoid opening the link (if any)
    e.preventDefault();

    // Get the ID of the dragged element
    const draggedElementId = e.dataTransfer.getData('text');
    const draggedElement = document.getElementById(draggedElementId);

    // Append the dragged element to the drop zone
    dropzone.appendChild(draggedElement);

    // Remove the class after drop
    dropzone.classList.remove('over');
});
