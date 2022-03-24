import { FC } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { alpha, useTheme } from '@mui/material';

interface StatisticsChartProps {
  data: any[];
  labels: string[];
}

const StatisticsChart: FC<StatisticsChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    const primaryGradient = ctx.createLinearGradient(6, 6, 6, 150);

 
    primaryGradient.addColorStop(0, '#020024');
    primaryGradient.addColorStop(0.5, '#092b79');
    primaryGradient.addColorStop(1, '#00d4ff');
    return {
      datasets: [
        {
          data: dataProp,
          borderWidth: 1,
          // backgroundColor: primaryGradient,
          borderColor: theme.colors.primary.main,
          pointBorderWidth: 0,
          pointRadius: 0,
          pointHoverRadius: 0
        }
      ],
      labels
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    layout: {
      padding: 20
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: true
          },
          ticks: {
            display: true
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true
          },
          ticks: {
            display: true
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      mode: 'nearest',
      intersect: false,
      caretSize: 6,
      displayColors: false,
      yPadding: 8,
      xPadding: 16,
      borderWidth: 4,
      callbacks: {
        title: () => { },
        label: (tooltipItem: any) => {
          return `Price: $${tooltipItem.yLabel}`;
        }
      }
    }
  };

  return (
    <div {...rest}>
      <Line data={data} options={options} />
    </div>
  );
};

StatisticsChart.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired
};

export default StatisticsChart;
