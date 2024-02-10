document.addEventListener("DOMContentLoaded", function() {
    const field = document.querySelector('.field');
    const ball = document.querySelector('.ball');
    
    field.addEventListener('mouseover', function(event) {
        const ballRadius = ball.offsetWidth / 2;
        const fieldRect = field.getBoundingClientRect();
        
        const ballX = event.clientX - fieldRect.left - ballRadius;
        const ballY = event.clientY - fieldRect.top - ballRadius;
        
        const maxX = field.offsetWidth - ball.offsetWidth;
        const maxY = field.offsetHeight - ball.offsetHeight;
        
        const limitedX = Math.min(Math.max(ballX, 0), maxX);
        const limitedY = Math.min(Math.max(ballY, 0), maxY);
        
        ball.style.left = limitedX + 'px';
        ball.style.top = limitedY + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let messages = document.getElementById('messages');
    
    messages.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('closeBtn')) {
            let messageItem = event.target.parentElement;
            messages.removeChild(messageItem);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let messages2 = document.getElementById('messages__2');
    
    messages2.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('closeBtn')) {
            let messageItem = event.target.parentElement;
            messages2.removeChild(messageItem);
        }
    });
});