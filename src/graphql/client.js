import ApolloClient from 'apollo-boost';
import { store } from '../redux/store';


const apollo = new ApolloClient({
  uri: 'https://ligapay.herokuapp.com',
  request: async (operation) => {
    const { user } = store.getState();

    operation.setContext({
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
  }
});

export default apollo;