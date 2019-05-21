import gql from 'graphql-tag';


export default gql`
  query {
    me {
      id
      team {
        id
        name
        avatar
        cartolaName
      }
      wallet {
        id
      }
    }
  }
`;
