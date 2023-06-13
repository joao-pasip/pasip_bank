import { ChangeEvent } from "react";
import "./Login.css"

interface inputLogin {
  name_input: string;
  type_input: string;
  id: string;
  name: string;
  value: string; 
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputLogin = ({ name_input, type_input, id, name, value, onChange}: inputLogin) => {
  return (
    <>
      <label className="label-login" htmlFor={id}>
        {name_input}
      </label>
      <input className="input-login" type={type_input} id={id} placeholder={name} name={name} value={value} onChange={onChange}/>
    </>
  )
}