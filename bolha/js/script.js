const opa = document.querySelector('body');
  let tmp = null;



  opa.addEventListener('mousedown', (event) => {
    const bolha = document.createElement('div');
    bolha.classList.add('bolha');
    bolha.style.top = `${event.offsetY}px`;
    bolha.style.left = `${event.offsetX}px`;

    console.log(bolha.style.top, event.offsetY);
    opa.appendChild(bolha);
    let size = 5;
    const step = () => {
      size++;
      const color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
      bolha.style.width = `${size}px`;
      bolha.style.height = `${size}px`;
      bolha.style.backgroundColor = color;
      tmp = window.requestAnimationFrame(step);
    };

    tmp = window.requestAnimationFrame(step);
  });

  opa.addEventListener('mouseup', (event) => {
    window.cancelAnimationFrame(tmp);
    console.log(tmp);
    tmp = null;
  });