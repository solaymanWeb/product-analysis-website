
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
   const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className="container charts">
            <div className="row gt-4">
                <div className="col-md-6">
                <div className='bar-chart'>
            <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip/>
            <Legend />
            <Bar dataKey="sell" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
             </div>
            </div>
                <div className="col-md-6">
                <div className="pai-chart">
                <PieChart width={730} height={250}>
            <Pie data={data} dataKey="sell" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Tooltip/>
            <Pie data={data} dataKey="sell" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;