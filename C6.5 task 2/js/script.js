const btnNode = document.querySelector('.btn');

btnNode.addEventListener('click', () => {
  
 const width = window.screen.width;
 const height = window.screen.height;
 resultText = `Размер экрана:\nширина-${width}px\nвысота-${height}px`;
  alert(resultText);
   
});