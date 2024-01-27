import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {useCookies} from "react-cookie";

import {auth} from "../api";

import * as Styles from './AdminAuth.styles';

export const AdminAuth = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const [cookies, setCookies] = useCookies(['token']);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  }

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.currentTarget.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    auth(login, pass)
      .then(res => {
        try {
          if (res && res.ok){
            setCookies('token', res.body.jwt, {
              secure: true,
              maxAge: 10800,
            })
            navigate('/admin')
          }
        } catch (e) {
          console.error("response isn't successful")
        }
      })
  }

  return (
    <Styles.AuthWrapper>
        <Styles.Input
          type='text'
          placeholder='Введите логин'
          onChange={handleLoginChange}
          value={login}
        />
        <Styles.Input
          type='password'
          placeholder={'Введите пароль'}
          onChange={handlePassChange}
          value={pass}
        />
        <Styles.SubmitButton
          onClick={handleSubmit}
          type='submit'
        >
          Войти
        </Styles.SubmitButton>
    </Styles.AuthWrapper>
  );
};
