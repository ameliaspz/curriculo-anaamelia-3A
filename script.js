document.getElementById("btn-print").addEventListener("click", () => {window.print();});

document.addEventListener('mousemove', function(e) {
  const spark = document.createElement('span');
  spark.classList.add('spark-effect');
  
  // CORREÇÃO: Usar pageX e pageY para coordenadas absolutas do documento
  spark.style.left = e.pageX + 'px';
  spark.style.top = e.pageY + 'px'; // <-- Mude de clientY para pageY
  
  document.body.appendChild(spark);
  
  // Remover o elemento após a animação
  setTimeout(() => {
    spark.remove();
  }, 1000); 
});