import gql from 'graphql-tag';


export default gql`
  mutation($origin: UUID!, $destination: UUID!, $amount: Int!) {
    createTransaction(origin: $origin, destination: $destination, amount: $amount) {
      success
      info
    }
  }
`;
