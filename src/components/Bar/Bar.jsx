import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Bar = ({ labelData,labelData1, bmiData,user_id }) => {
  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(63, 81, 181, 700);
    gradient.addColorStop(0, '#929dd9');
    gradient.addColorStop(1, '#172b4d');

    return {
      labels: labelData,
      labels1:labelData1,
      user_id:user_id,
      datasets: [
        {
          label: 'BMI',
          data: bmiData,
          backgroundColor: gradient,
          borderColor: '#3F51B5',
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2
        }
      ]
    };
  };

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date',
            label1String:"Time",
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'BMI',
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16,
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13
    }
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

Bar.propTypes = {
  labelData: PropTypes.array,
  labelData1:PropTypes.array,
  user_id:PropTypes.string,
  bmiData: PropTypes.array
};

export default Bar;
