const horizontalLine = document.querySelector('.horizontal');
const verticalLine = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => { // boundingClientRect value should get after 'target' element is loaded, if not, sometimes, target.getBoundingClientRect().width might be 0
    let toggle = false;

    const targetRect = target.getBoundingClientRect();
    const targetHalWidth = targetRect.width / 2;
    const targetHalHeight = targetRect.height / 2;

    function moveLineToTarget(e) {
      const x = e.clientX;
      const y = e.clientY;

      verticalLine.style.transform = `translateX(${x}px)`;
      horizontalLine.style.transform = `translateY(${y}px)`;

      target.style.transform = `translate(${x - targetHalWidth}px, ${
        y - targetHalHeight
      }px)`;

      tag.style.transform = `translate(${x}px, ${y}px)`;

      tag.innerHTML = `${x}px ${y}px`;
    }

    target.addEventListener("click", () => {
      if (toggle) {
        target.style.filter = "opacity(.7) drop-shadow(0 0 0 red)";
        document.removeEventListener("mousemove", moveLineToTarget);
      } else {
        target.style.filter = null;
        document.addEventListener("mousemove", moveLineToTarget);
      }
      toggle = !toggle;
    }); 
});
