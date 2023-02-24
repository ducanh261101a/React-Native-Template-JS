import { Request } from './api.service';

const Api = {
  signup: (props) =>
    Request.post('auth/signup', props),

  login: (props) =>
    Request.post('auth/login', props),
};

export default Api;
