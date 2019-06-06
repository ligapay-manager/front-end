import gql from 'graphql-tag';


export const ME = gql`
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

export const WALLET = gql`
  query {
    me {
      id
      cards {
        id
        holderName
      }
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

export const TEAM_SCORES = gql`
  query {
    me {
      team {
        scores {
          score
          round
        }
      }
    }
  }
`;
