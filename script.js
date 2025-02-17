let draggedElement = null;

// Select all elements with the class "image"
let images = document.querySelectorAll('.image');

// Assign unique IDs and background images to each image div
images.forEach((img, index) => {
    img.id = `image${index + 1}`;
    img.style.backgroundImage = `url(https://picsum.photos/id/${237 + index}/200/300)`;
    img.style.width = "200px";   
    img.style.height = "300px";  
    img.style.margin = "20px";   
});

// Drag start: Store the dragged element
function dragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

// Drag over: Allow dropping
function dragOver(e) {
    e.preventDefault();
}

// Drag enter: Highlight the target
function dragEnter() {
    this.classList.add('hovered');
}

// Drag leave: Remove highlight
function dragLeave() {
    this.classList.remove('hovered');
}

// Drop: Swap images
function drop(e) {
    e.preventDefault();
    if (draggedElement !== this) {
        // Swap background images
        let temp = this.style.backgroundImage;
        this.style.backgroundImage = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = temp;
    }
}

// Drag end: Remove highlighting
function dragEnd() {
    images.forEach(img => img.classList.remove('dragging', 'hovered'));
}

// Add event listeners to all images
images.forEach(img => {
    img.addEventListener('dragstart', dragStart);
    img.addEventListener('dragover', dragOver);
    img.addEventListener('dragenter', dragEnter);
    img.addEventListener('dragleave', dragLeave);
    img.addEventListener('drop', drop);
    img.addEventListener('dragend', dragEnd);
});


