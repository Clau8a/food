import { CreateAuthRequest, fetchData } from '../../api/constants';

// const auth = async ({ email, password }) => {
//   const request = await CreateAuthRequest('POST', { password, email }, true);
//   return fetchData('login', request);
// };

const auth = ({ email, password }) => {
  return Promise.resolve({ token: 'truexd' });
};

export default auth;