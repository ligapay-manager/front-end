import { store } from '../store';


const Axios = require('axios');


const axios = Axios.create({
  baseURL: 'https://api.cartolafc.globo.com/'
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
        data: { glbId: tokenGlobo }
      } = await Axios.post('https://login.globo.com/api/authentication', {
        payload: { email, password, serviceId: 438 }
      });
      return { tokenGlobo };
    } catch (error) {
      return { tokenGlobo: null };
    }
  },
  getMinhasLigas: async () => {
    try {
      const { user } = store.getState();
      const { data } = await axios.get('auth/ligas', { headers: { 'X-GLB-Token': user.tokenGlobo } });
      const { ligas } = data;
      return MakeResponse(200, ParseLeagues(ligas));
    } catch (error) {
      return MakeResponse(error.response.status, error.response.data);
    }
  },
  getLigas: async (nameLeague) => {
    try {
      const { user } = store.getState();
      const { data } = await axios.get(`ligas?q=${nameLeague}`, { headers: { 'X-GLB-Token': user.tokenGlobo } });
      return MakeResponse(200, ParseLeagues(data));
    } catch (error) {
      return MakeResponse(error.response.status, error.response.data);
    }
  },
  getDetailsLeague: async (leagueSlug, option) => {
    try {
      const { user } = store.getState();
      const { data } = await axios.get(`auth/liga/${leagueSlug}/?orderBy=${option}`, {
        headers: { 'X-GLB-Token': user.tokenGlobo }
      });
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
  },
  getTeam: async () => {
    try {
      const { user } = store.getState();
      const { data } = await axios.get('auth/time', { headers: { 'X-GLB-Token': user.tokenGlobo } });
      return MakeResponse(200, data);
    } catch (error) {
      return MakeResponse(error.response.status, error.response.data);
    }
  },
  getTeamForRound: async (teamId, round) => {
    try {
      const { user } = store.getState();
      const { data } = await axios.get(`time/id/${teamId}/${round}`, { headers: { 'X-GLB-Token': user.tokenGlobo } });
      return MakeResponse(200, data);
    } catch (error) {
      return MakeResponse(error.response.status, error.response.data);
    }
  }
};

export default ApiCartola;
