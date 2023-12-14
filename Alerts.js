import React from 'react';

const CustomAlertList = ({ customAlerts, markAsFalseAlarmCustom }) => {
  return (
    <ul>
      {customAlerts.map(alert => (
        <li key={alert.id}>
        </li>
      ))}
    </ul>
  );
};

export default CustomAlertList;
