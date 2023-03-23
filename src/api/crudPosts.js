import { publicUrl } from "../assets/constants/constants";

export const publishDataPost = async(data)=>{
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${publicUrl}`,options);//'http://localhost:4000/createPost' //createPost
    const result = await response.json();
    console.log('Result createPost:..',result);
    //if (result) window.location.href= homeFront; //'http://127.0.0.1:5500/projectJS/index.html'
  } catch (error) {
    console.log(error)
  }
}

export const editDataPost = async(data)=>{
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${publicUrl}/${data.id}`,options);//'http://localhost:4000/createPost' //createPost
    const result = await response.json();
    console.log('Result editPost:..',result);
    //if (result) window.location.href= homeFront; //'http://127.0.0.1:5500/projectJS/index.html'
  } catch (error) {
    console.log(error)
  }
}

export const getLastPost = async ()=>{
  try {
    const response = await fetch(`${publicUrl}`); //'http://localhost:4000/getLastPost' //getLastPost
    const result = await response.json();
    //console.log('Result getLastPost:..',result);
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}

export const deletePost = async(id)=>{
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  }
  try {
    const response = await fetch(`${publicUrl}/${id}`,options);//'http://localhost:4000/createPost' //createPost
    const result = await response.json();
    console.log('Result deletePost:..',result);
    //if (result) window.location.href= homeFront; //'http://127.0.0.1:5500/projectJS/index.html'
  } catch (error) {
    console.log(error)
  }
}