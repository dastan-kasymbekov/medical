import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../../components/Layout";
import './Tasks.scss'

const Tasks = () => {
  return (
    <Layout>
      <div className="tasks page">
        <h1 className="page-title">Задачи и работы</h1>
      </div>
    </Layout>
  );
};

export default Tasks;