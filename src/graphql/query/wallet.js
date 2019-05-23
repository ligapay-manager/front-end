import gql from 'graphql-tag';


export default gql`
  query {
    me {
      id
      wallet {
        id
        amount
        transactions {
          id
          amount
          createdAt
        }
      }
    }
  }
`;
