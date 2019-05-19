import gql from 'graphql-tag';


export default gql`
  query {
    me {
      team {
        name
        avatar
        cartolaName
      }
    }
  }
`;
