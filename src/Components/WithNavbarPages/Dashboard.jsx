import React from 'react';

const Dashboard = ({ health }) => {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Assuming health is a value between 0 and 100
  const strokeDashoffset =
    circumference - (health / 100) * circumference;

    return (
      <svg height={radius *2} width={radius*2}>
        <circle 
          stroke="grey"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle 
          stroke="blue"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ strokeDashoffset }}
        />
      </svg>
    )
}

export default Dashboard;
