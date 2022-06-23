import React, {useState, useEffect} from 'react';
import "./Projects.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner, faUser} from '@fortawesome/free-solid-svg-icons'
import Layout from "../../components/Layout";
import axios from "axios";
import AddProjectModal from "../../AddProjectModal";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('https://62af2173b0a980a2ef3a9ec2.mockapi.io/projects')
      .then((res) => {
        setProjects(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <Layout>
      {
        openModal &&
        <AddProjectModal setOpenModal={setOpenModal}
                         projects={projects}
                         setProjects={setProjects}
        />
      }
      <div className="projects page">
        <h1 className="title">Проекты</h1>
        <h4 className="subtitle">Список проектов</h4>
        <div className="list-btn_wrapper d-flex justify-content-between">
          <h3 className="list">Список проектов</h3>
          <button type="button" className='button' onClick={() => setOpenModal(true)}>Добавить проект</button>
        </div>

        <div className="d-flex flex-wrap">
          {
            projects.map((project) => (
              <div key={project.id} className="col-4 mb-12">
                <div className="img-title">
                  <div
                    className="img-wrapper overflow-hidden rounded-sm bg-white shadow-lg cursor-pointer duration-200 hover:scale-105 hover:shadow-xl">
                    <img src={project.imgLink} alt="plant"
                         className="w-full image"/>
                    <div className="p-3">
                      <h4 className="text-xl">{project.projectName}</h4>
                      <div className="">
                        <span className="block">{`${project.startDate} - ${project.endDate} гг.`}</span>
                        <span className="block">{project.leaderName}</span>
                        <span className="block mb-3">{project.adminName}</span>
                      </div>
                      <div className="d-flex justify-content-between align-content-center">
                        <div className="">
                          <FontAwesomeIcon className="pr-1" icon={faUser}/>
                          <FontAwesomeIcon className="pr-1" icon={faUser}/>
                          <FontAwesomeIcon className="pr-1" icon={faUser}/>
                          <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <FontAwesomeIcon className="" icon={faSpinner}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
};

export default Projects;