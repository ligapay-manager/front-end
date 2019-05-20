import gql from 'graphql-tag';


export default gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      info
      user {
        id
        wallet {
          id
        }
        team {
          id
        }
      }
    }
  }
`;
