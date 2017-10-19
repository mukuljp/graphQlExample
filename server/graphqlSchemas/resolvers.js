import axios from 'axios';

const AxiosPort = 4200;


export default {
  Query: {
    hello: (parent, args, context) => 'hiii',
    user: (parent, { id }, context) => axios.get(`http://localhost:${AxiosPort}/users/${id}`)
      .then(res => res.data),
    company: (parent, { id }, context) => axios.get(`http://localhost:${AxiosPort}/companies/${id}`)
      .then(res => res.data),
  },
  User: {
    company: ({ companyId }, args, context) => axios.get(`http://localhost:${AxiosPort}/companies/${companyId}`)
      .then(res => res.data),
  },
  Company: {
    user: ({ id: companyId }, args, context) =>
      axios.get(`http://localhost:${AxiosPort}/companies/${companyId}/users`)
        .then(res => res.data),
  },
  Mutation: {
    createUser: (parent, { firstName, age, companyId }, context) =>
      axios.post(`http://localhost:${AxiosPort}/users`, { firstName, age, companyId })
        .then(res => res.data),
  },
};

