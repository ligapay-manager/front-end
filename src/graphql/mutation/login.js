import gql from 'graphql-tag';


export default gql`
  mutation($value: LoginInput!) {
    login(info: $value) {
      token
      refreshToken
    }
  }
`;
