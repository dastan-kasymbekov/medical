import React, {useEffect, useState} from 'react';
import "./Login.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [details, setDetails] = useState({login: "", password: ""})
  let navigate = useNavigate()
  const admin = {
    login: "admin",
    password: "admin",
  }

  const login = (details) => {
    if (details.login === admin.login && details.password === admin.password) {
    } else {
      alert("Неверный логин или пароль")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(details)
    if (details.login === admin.login && details.password === admin.password) {
      navigate('/projects')
    }
  }
  return (
    <div className="login-wrapper">
      <div className="bg-white max-w-sm p-4 sm:p-6 lg:p-8 z-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login"
                   className="login-input text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Логин</label>
            <input type="text" name="login" id="login"
                   autoComplete="true"
                   onChange={(e) => setDetails({...details, login: e.target.value})}
                   value={details.name}
                   className="border border-gray-300 text-gray-900 sm:text-sm focus:border-gray-200 block w-full p-2.5"
                   placeholder="Логин" required={true}/>
          </div>
          <div>
            <label htmlFor="password"
                   className="login-input text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Пароль</label>
            <input type="password" name="password" id="password" placeholder="Пароль"
                   autoComplete="true"
                   onChange={(e) => setDetails({...details, password: e.target.value})}
                   value={details.name}
                   className="border border-gray-300 text-gray-900 sm:text-sm focus:border-gray-200 block w-full p-2.5"
                   required={true}/>
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5 text-sm position-relative">
                <input id="remember" aria-describedby="remember" type="checkbox"
                       className="remember-input border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                       required=""/>
                <FontAwesomeIcon className="remember-input_icon" icon={faCheck}/>
                <label htmlFor="remember" className="remember-label font-medium text-gray-900 dark:text-gray-300 z-10">Запомнить
                  пароль</label>
              </div>
            </div>
          </div>
          <button type="submit"
                  className="login-btn w-full text-white font-medium text-sm px-5 py-2.5 my-3 text-center"
          >Войти
          </button>
          <a href="src/pages/Login/Login#" className="lost-link">Забыли пароль?</a>
        </form>
      </div>
    </div>
  );
};

export default Login;