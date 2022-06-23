import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../../components/Layout";
import './Calendar.scss'

const Calendar = () => {
  return (
    <Layout>
      <div className="calendar page">
        <h1 className="page-title">Календарь</h1>
      </div>
    </Layout>
  );
};

export default Calendar;