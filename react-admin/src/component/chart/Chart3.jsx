import "./chart.scss";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'P1',
    abscence: 20 ,
    ipe: 4,
    amt: 2400,
  },
  {
    name: 'P2',
    abscence: 34,
    ipe: 6,
    amt: 2210,
  },
  {
    name: 'P3',
    abscence: 50,
    ipe: 8,
    amt: 2210,
  },
  {
    name: 'P4',
    abscence: 7,
    ipe: 1,
    amt: 2210,
  },
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
       <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorab" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="coloripe" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="abscence" stroke="#8884d8" fillOpacity={1} fill="url(#colorab)" />
  <Area type="monotone" dataKey="ipe" stroke="#82ca9d" fillOpacity={1} fill="url(#coloripe)" />
</AreaChart>

      </ResponsiveContainer>
    );
  }
}
