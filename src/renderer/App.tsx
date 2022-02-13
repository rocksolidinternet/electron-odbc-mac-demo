import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

import HID from 'node-hid'

const devices = HID.devices();

devices.sort((a,b)=> b.vendorId-a.vendorId || b.productId-a.productId )

const Hello = () => {
    var createDeviceLine = function(device,index) {
        return (
            <tr key={index}>
                <td>{device.vendorId}</td>
                <td>{device.productId}</td>
                <td>{device.usagePage}</td>
                <td>{device.usage}</td>
                <td>{device.manufacturer}</td>
                <td>{device.product}</td>
                <td>{device.serialNumber}</td>
                <td>{device.path}</td>
            </tr>
        );
    }

  return (
    <div>

      <h1>Hello from electron-hid-test-erb</h1>

      <div>
      We are using node { process.versions.node },
      Chrome {process.versions.chrome},
      and Electron { process.versions.electron }.
      </div>

      <h2> HID Device List </h2>

      <table>
      <thead>
      <tr><th> vendorId </th>
          <th> productId </th>
          <th> usagePage </th>
          <th> usage </th>
          <th> manufacturer </th>
          <th> product </th>
          <th> serialNumber </th>
          <th> path </th>
      </tr>
      </thead>
      <tbody>
      {devices.map(createDeviceLine, this)}
      </tbody>
      </table>

      <h2> HID Device List (JSON) </h2>
      <pre>
      { JSON.stringify(HID.devices(),null, '  ') }
      </pre>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
