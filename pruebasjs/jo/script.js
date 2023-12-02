function generarFechaAleatoria(fechaInicio, fechaFin) {
    const inicioTimestamp = fechaInicio.getTime();
    const finTimestamp = fechaFin.getTime();
  
    const fechaAleatoriaTimestamp = Math.random() * (finTimestamp - inicioTimestamp) + inicioTimestamp;
  
    const fechaAleatoria = new Date(fechaAleatoriaTimestamp);

    const fecha = new Date(fechaAleatoria); // Aquí puedes asignar tu fecha específica

const year = fecha.getFullYear();
const month = String(fecha.getMonth() + 1).padStart(2, '0');
const day = String(fecha.getDate()).padStart(2, '0');

const fechaFormateada = `${year}-${month}-${day}`;


  
    return fechaFormateada;
  }
  
  // Ejemplo de uso
  const fechaInicio = new Date("2021-01-01");
  const fechaFin = new Date("2023-11-20");
  
  const fechaAleatoria = generarFechaAleatoria(fechaInicio, fechaFin);
  
  console.log(fechaAleatoria);

  const eldiv = document.querySelector(".eldiv");

  for (let i = 0; i < 100; i++) {
    let div = document.createElement('p');
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const numeroAleatorio2 = Math.floor(Math.random() * 10000000) + 1000;
    div.textContent  = `INSERT INTO public.registro_ventas(serial_de_venta, fecha_y_hora, detalles_de_venta, total_venta) VALUES  (${numeroAleatorio2}, ${generarFechaAleatoria(fechaInicio, fechaFin)}, probando, $${numeroAleatorio}.00);`;


    eldiv.appendChild(div);
    
    let br = document.createElement('br');
    eldiv.appendChild(br);
  }



  ////////////////////

