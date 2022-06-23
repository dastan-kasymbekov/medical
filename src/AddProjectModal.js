import React   from 'react';
import "./index.scss"
import { useFormik } from 'formik';
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import './AddProjectModal.css'


const validate = values => {
  const errors = {};

  if (!values.imgLink) {
    errors.imgLink = 'Вставьте ссылку на изображение проекта!';
  }
  if (!values.projectName) {
    errors.projectName = 'Введите название проекта!';
  }

  if (!values.startDate) {
    errors.startDate = 'Введите дату начала проекта!';
  }

  if (!values.endDate) {
    errors.endDate = 'Введите дату окончания проекта!';
  }
if (!values.leaderName) {
    errors.leaderName = 'Введите руководителя проекта!';
  }
if (!values.adminName) {
    errors.adminName = 'Введите администратора проекта!';
  }

  return errors;
};

const AddProjectModal = ({openModal,setOpenModal, projects, setProjects}) => {

  const formik = useFormik({
    initialValues: {
      imgLink: '',
      projectName: '',
      startDate: '',
      endDate: '',
      leaderName: '',
      adminName: '',
    },
    validate,
    onSubmit: async (values) => {
      const addProject = await axios.post('https://62af2173b0a980a2ef3a9ec2.mockapi.io/projects', values)
      setProjects([...projects, addProject.data])
      setOpenModal(false)
    },
  });

  return (
    <div className="modal-wrapper fixed justify-center flex bg-white p-6 h-full z-20">
      <div className="absolute right-9 top-9 cursor-pointer" onClick={() => {
        setOpenModal(false)
      }}>
        <FontAwesomeIcon className="h-6" icon={faXmark} />
      </div>
      <form className="py-4" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="imgLink"
            className="mb-1 block text-base font-medium text-[#07074D]"
          >
            Ссылка на изображение
          </label>
          <input
            type="text"
            name="imgLink"
            id="imgLink"
            onChange={formik.handleChange}
            value={formik.values.imgLink}
            placeholder="Ссылка на изображение"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.imgLink ? <div className="input-error">{formik.errors.imgLink}</div> : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="projectName"
            className="mb-1 block text-base font-medium text-[#07074D]"
          >
            Название проекта
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            onChange={formik.handleChange}
            value={formik.values.projectName}
            placeholder="Название проекта"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.projectName ? <div className="input-error">{formik.errors.projectName}</div> : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="mb-1 block text-base font-medium text-[#07074D]"
          >
            Дата начала проекта
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            onChange={formik.handleChange}
            value={formik.values.startDate}
            placeholder="Дата начала проекта"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.startDate ? <div className="input-error">{formik.errors.startDate}</div> : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="mb-1 block text-base font-medium text-[#07074D]"
          >
            Дата окончания проекта
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            onChange={formik.handleChange}
            value={formik.values.endDate}
            placeholder="Enter your phone"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.endDate ? <div className="input-error">{formik.errors.endDate}</div> : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="leaderName"
            className="mb-1 block text-base font-medium text-[#07074D]">
            Руководитель проекта
          </label>
          <input
            type="text"
            name="leaderName"
            id="leaderName"
            onChange={formik.handleChange}
            value={formik.values.leaderName}
            placeholder="Руководитель проекта"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.leaderName ? <div className="input-error">{formik.errors.leaderName}</div> : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="adminName"
            className="mb-1 block text-base font-medium text-[#07074D]">
            Администратор проекта
          </label>
          <input
            type="text"
            name="adminName"
            id="adminName"
            onChange={formik.handleChange}
            value={formik.values.adminName}
            placeholder="Администратор проекта"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.adminName ? <div className="input-error">{formik.errors.adminName}</div> : null}
        </div>
        <div>
          <button type="submit"
            className="add-btn hover:shadow-form rounded-md py-2.5 px-8 text-base font-semibold text-white outline-none"
          >
            {'Добавить'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectModal;