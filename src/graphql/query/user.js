import gql from 'graphql-tag';


export default gql`
  query {
    me {
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
