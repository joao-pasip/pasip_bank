import React from "react";
import { InputLogin } from "./InputLogin";
import './Login.css';

interface DadosLogin {
  nome: string;
  email: string;
  senha: string;
}

export const Login = () => {
  const [login, setLogin] = React.useState<DadosLogin>({
    nome: '',
    email: '',
    senha: ''
  })
  const handleClick = () => window.alert(`Seja bem-vindo(a), ${login.nome}`)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <section className="section-main">

      <section className="section-login">
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="box-input">
          <InputLogin
            name_input="Nome" 
            type_input="text" 
            id="nomeInput" 
            name='nome' 
            value={login.nome} 
            onChange={(event) => handleChange(event)}
          />
        </div>

        <div className="box-input">
          <InputLogin 
            name_input="Email" 
            type_input="email" 
            id="emailInput" 
            name='email' 
            value={login.email} 
            onChange={(event) => handleChange(event)} 
          />
        </div>
        <div className="box-input">
          <InputLogin 
            name_input="Senha" 
            type_input="password" 
            id="passwordInput" 
            name='senha' 
            value={login.senha} 
            onChange={(event) => handleChange(event)} 
          />
        </div>
        <button className="button-entrar" type='button' onClick={handleClick}>Entrar</button>

      </section>

    </section>
  )
}