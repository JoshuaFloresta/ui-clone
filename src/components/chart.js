import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./content.css"

const data = [
  { name: '00:00', uv: 0 },
  { name: '03:00', uv: 300 },
  { name: '06:00', uv: 600 },
  { name:  '09:00', uv: 900 },
  { name: '12:00', uv: 1200 },
  { name: '15:00', uv: 1800 },
  { name: '21:00', uv:  2400},
  { name: '24:00', uv:  2400},


];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-connect-nulls-sqp96';

  render() {
    return (
      <div className='chart-container'>
         <p id='sales'>Sales ($)</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
