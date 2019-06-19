const Axios = require('axios');


const axios = Axios.create({
  baseURL: 'https://api.cartolafc.globo.com/',
  headers: {
    'X-GLB-Token':
      // eslint-disable-next-line max-len
      '197a33558a216b78fbbfcff4c107b407434693135643173566e397078576a53364b2d415048484c534653714f66645f457967594f6b684c3236366d6e2d7a764450656330646166566370586a5a2d5a4b4b7a4750726c6a445136374e4b662d624a535f4573413d3d3a303a756c6b68637971677268726f706c6f626d6a776f'
  }
});

const MakeResponse = (responseCode, responseData) => ({ code: responseCode, data: responseData });

const ParseLeagues = (ligas) => {
  const parse = response => ({
    id: response.liga_id,
    name: response.nome,
    slug: response.slug,
    owner: response.time_dono_id,
    vagas: response.vagas_restantes,
    image: response.url_flamula_png || response.imagem,
    descripition: response.descricao,
    cartoleiros: response.total_times_liga || response.quantidade_times,
    mata_mata: response.mata_mata,
    restriction: response.tipo
  });

  return ligas.map(parse);
};

const ParseTeam = (team) => {
  const parse = response => ({
    id: response.time_id,
    name: response.nome,
    nameCartola: response.nome_cartola,
    slug: response.slug,
    imageProfile: response.foto_perfil,
    imageTeam: response.url_escudo_png,
    ranking: response.ranking.rodada,
    points: {
      parcial: response.pontos.rodada,
      total: response.pontos.campeonato
    }
  });

  return team.map(parse);
};

const ApiCartola = {
  login: async (email, password) => {
    try {
      const {
        data: { glbId: token }
      } = await Axios.post('https://login.globo.com/api/authentication', {
        payload: { email, password, serviceId: 438 }
      });
      return { token };
    } catch (error) {
      return { token: null };
    }
  },
  getMinhasLigas: async () => {
    try {
      const { data } = await axios.get('auth/ligas');
      const { ligas } = data;
      return MakeResponse(200, ParseLeagues(ligas));
    } catch (error) {
      return MakeResponse(error.response.status, error.response.data);
    }
  },
  getLigas: async (nameLeague) => {
    try {
      const { data } = await axios.get(`ligas?q=${nameLeague}`);
      return MakeResponse(200, ParseLeagues(data));
    } catch (error) {
      return MakeResponse(error.response.status, error.response.data);
    }
  },
  getDetailsLeague: async (leagueSlug, option) => {
    try {
      const { data } = await axios.get(`auth/liga/${leagueSlug}/?orderBy=${option}`);
      const { liga: infoLeague } = data;
      const { times: Teams } = data;

      const league = {
        info: ParseLeagues([infoLeague])[0],
        teams: ParseTeam(Teams)
      };
      return MakeResponse(200, league);
    } catch (error) {
      return MakeResponse(error.response.status, error.response.data);
    }
  }
};

module.exports = { ApiCartola };
