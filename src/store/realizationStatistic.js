import axios from "axios";

export const realizationStatistic = {
    state: () => ({
        ticketStatistic:null,
        isRealizationStatisticLoading: false,
    }),
    mutations: {
        setRealizationStatistic(state, statistic) {
            state.ticketStatistic = statistic.ticketData;
            state.authorByCountData = statistic.authorByCountData;
        },
        setLoading(state, isLoading) {
            state.isRealizationStatisticLoading = isLoading;
        },
    },
    actions: {
        async getRealizationStatistic({commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://secure-spire-71986.herokuapp.com/tickets/realization-statistic');
                await commit('setRealizationStatistic', response.data);
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
    },
    namespaced: true
}
