import axios from "axios";

export const realizationStatistic = {
    state: () => ({
        statistic:null,
        isRealizationStatisticLoading: false,
    }),
    mutations: {
        setRealizationStatistic(state, statistic) {
            state.statistic = statistic;
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
