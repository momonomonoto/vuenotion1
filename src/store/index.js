import {createStore} from "vuex";
import {realizationStatistic} from "@/store/realizationStatistic";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        realizationStatistic: realizationStatistic
    }
})
