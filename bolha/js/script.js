const opa = document.querySelector('body');
  let tmp = null;
  
const bolhas = []; 
function acabeiDeCrescer(offsetY, offsetX, size){
  let event = new Event('crescendo');
  bolhas.forEach(element => {
    element.dispatchEvent(event);
  });
}
  opa.addEventListener('mousedown', (event) => {
    const bolha = document.createElement('div');
    bolha.classList.add('bolha');
    bolha.style.top = `${event.offsetY}px`;
    bolha.style.left = `${event.offsetX}px`;
    bolha.addEventListener('crescendo', function (e) { 
      console.log('alguem cresceu'); 
      }, false);
    
    opa.appendChild(bolha);
    bolhas.push(bolha);   
    let size = 5;
    const step = () => {
      size++;
      const color = "#000000";
      bolha.style.width = `${size}px`;
      bolha.style.height = `${size}px`;
      bolha.style.backgroundColor = color;
      acabeiDeCrescer(event.offsetY, event.offsetX, size);
      tmp = window.requestAnimationFrame(step);
    };

    tmp = window.requestAnimationFrame(step);
  });

  opa.addEventListener('mouseup', (event) => {
    window.cancelAnimationFrame(tmp);
    
    tmp = null;
  });