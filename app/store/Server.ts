
import { AxiosResponse } from "axios";
import {
    useQuery,
    useInfiniteQuery,
  } from "react-query";
  import axios from "axios";

  
// export const Login = (loginDetails: any) => {
//     return useQuery(LOGIN_KEY, () => {
//       return axios.get(`${BASE_URL}/api/login`);
//     });
//   };