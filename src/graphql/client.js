import ApolloClient from 'apollo-boost';
import { store } from '../store';


const apollo = new ApolloClient({
  uri: 'http://ligapay.tk',
  request: async (operation) => {
    const { user } = store.getState();

    if (user.token) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
  }
});

export default apollo;
