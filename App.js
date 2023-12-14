import React, { useEffect, useState } from 'react';
import CustomAlertList from './Alerts';
import CustomSearchBar from './search';
import { customAlertsData } from './givend';

const CustomApp = () => {
  const [customAlerts, setCustomAlerts] = useState([]);
  const [filteredCustomAlerts, setFilteredCustomAlerts] = useState([]);

  useEffect(() => {

  }, []);

  const handleCustomSearch = (searchType, searchTerm, startDate, endDate) => {
    let filtered = customAlerts;

    if (searchType === 'freeText') {
      filtered = customAlerts.filter(alert =>
        Object.values(alert).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (searchType === 'vehicleNumber') {
      filtered = customAlerts.filter(
        alert =>
          alert.vehicle_friendly_name
      );
      }

    setFilteredCustomAlerts(filtered);
  };

  const markAsFalseAlarmCustom = alertId => {
  };

  return (
    <div>
      <h1>Custom Alerts</h1>
      <CustomSearchBar onSearch={handleCustomSearch} />
      <CustomAlertList alerts={filteredCustomAlerts} markAsFalseAlarm={markAsFalseAlarmCustom} />
    </div>
  );
};

export default CustomApp;
