const horizontalLine = document.querySelector('.horizontal');
const verticalLine = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

let toggle = false;

function moveLineToTarget(e){
    const x = e.clientX;
    const y = e.clientY;
    verticalLine.style.left = `${x}px`;
    horizontalLine.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px ${y}px`;
}

target.addEventListener('click', () => {
    if(toggle){
        target.style.filter = 'opacity(.7) drop-shadow(0 0 0 red)';
        document.removeEventListener('mousemove', moveLineToTarget);
    }else{
        target.style.filter = null;
        document.addEventListener('mousemove', moveLineToTarget);
    }
    toggle = !toggle;
}); 
