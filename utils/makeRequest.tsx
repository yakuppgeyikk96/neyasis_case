
import axios from "axios";

export interface HttpResponse {
  status: number;
  data: any
}

export interface ErrorResponse {
  status: number;
  errorMessage: string;
}

const httpClient = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    "Content-Type": "application/json"
  }
});

httpClient.interceptors.response.use((res) => {
  const successCodes = [200, 201]; // Diğer kodlar da eklenebilir.
  if (successCodes.includes(res.status)) {
    const responseSuccess: HttpResponse = {
      status: res.status,
      data: res.data
    }

    return responseSuccess;
  } else {
    const errorRes: ErrorResponse = {
      status: res.status,
      errorMessage: 'An error occurred!'
    }

    return errorRes;
  }
});

export default httpClient;