const insert = document.getElementById('insert')
window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
     <div class = "key">
     ${event.key === ' ' ? 'Space' : event.key}
     <small> <strong>Event.key </strong></small>
     </div>
     
     <div class = "key">
     ${event.keyCode}
     <small><strong>Event.keyCode</strong></small>
     </div>
     
     <div class = "key">
     ${event.code}
     <small><strong>Event.code</strong></small>
     </div>
     `
    
} )