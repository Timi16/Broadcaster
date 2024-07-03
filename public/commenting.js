// Initialize socket.io connection
const socket = io();

// Function to add a comment
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText === '') {
        console.log('Please enter a comment.');
        return;
    }

    // Emit the new comment to the server
    socket.emit('new-comment', commentText);
    commentInput.value = '';
}

// Function to display new comments
function displayComment(comment) {
    const commentsList = document.getElementById('commentsList');
    const commentElement = document.createElement('div');
    commentElement.textContent = comment;
    commentsList.appendChild(commentElement);
}

// Listen for new comments from the server
socket.on('new-comment', (comment) => {
    displayComment(comment);
});
