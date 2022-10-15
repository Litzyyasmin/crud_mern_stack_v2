import React, { useContext, useEffect } from "react";
import AOS from 'aos';
import { RegistroContext } from "./context/RegistroContext";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function Grafica() {

  const {dataregistros} = useContext(RegistroContext);

  useEffect(() => {
    AOS.init()
  }, [])

  const totalOcupaciones = dataregistros.reduce((acc, registro) => {
    if (registro.ocupacion in acc) {
      acc[registro.ocupacion] += 1;
    } else {
      acc[registro.ocupacion] = 1;
    }
    return acc;
  }, {});

  const data = {
    labels: ['Empleado', 'Estudiante', 'Desempleado', 'Otro'],
    datasets: [{
      label: 'Ocupacion',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      data: totalOcupaciones,
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  useEffect(() => {
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    return () => myChart.destroy();
  }, [dataregistros]);


  return (
    <div className="container"  data-aos="fade-up-left">
      <h2>Grafica</h2>
      <canvas id='myChart' height="150"></canvas>
    </div>
  );
}

export default Grafica;