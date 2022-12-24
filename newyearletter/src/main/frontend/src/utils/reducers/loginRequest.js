import axios from 'axios';

export function loginRequest(dataToSubmit) {
  const request = axios.post('/api/users/login', dataToSubmit)
      .then(response => response.data)

  return {
      payload: request
  }
}