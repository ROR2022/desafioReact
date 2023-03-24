import { publicUrlUsers } from "../assets/constants/constants";

export const enviarRegistro = async (dataUser)=>{
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dataUser)
  }
  try {
    const response = await fetch(`${publicUrlUsers}`,options);
    const result = await response.json();
    console.log('Result createUser:..',result);
    return result
    //if (result) window.location.href= homeFront;
  } catch (error) {
    console.log(error);
  }
}

export const enviarLogin = async (dataUser) =>{
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dataUser)
  }
  try {
    const response = await fetch(`${publicUrlUsers}/login`,options);
    const result = await response.json();
    console.log('Result LoginUser:..',result);
    return result
    //if (result) window.location.href= homeFront;
  } catch (error) {
    console.log(error);
  }
}

export const getDataUser = async (id)=>{
  try {
    const response = await fetch(`${publicUrlUsers}/${id}`);
    const result = await response.json();
    //console.log('Result getDataUser:..',result);
    return result
  } catch (error) {
    console.log(error);
  }
}