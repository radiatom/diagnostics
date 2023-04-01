import React from 'react';
import DiagnosticBatteryHeader from "./DiagnosticBatteryHeader/DiagnosticBatteryHeader" 
import AllDiagnosticBattery from "./AllDiagnosticBattery/AllDiagnosticBattery"

const DiagnosticBattery = () => {
      return (
            <div> 
                  <DiagnosticBatteryHeader/>
                  <AllDiagnosticBattery/>
            </div>
      );
}

export default DiagnosticBattery;
