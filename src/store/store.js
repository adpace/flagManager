import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state    : {
    homeScore           : 0,
    awayScore           : 0,
    timeRemaining       : 0,
    halfLength          : 0,
    showHomeTitlePopover: false,
    showAwayTitlePopover: false,
    showGameClockPopover: false,
    showStartButton     : true
  },
  getters  : {
    getState : state => {
      console.log(state);
      return state
    },
    getHomeScore           : state => {
      return state.homeScore
    },
    getAwayScore           : state   => {
      return state.awayScore
    },
    getTimeRemaining       : state   => {
      return state.timeRemaining
    },
    getShowHomeTitlePopover: state   => {
      return state.showHomeTitlePopover
    },
    getShowAwayTitlePopover: state   => {
      return state.showAwayTitlePopover
    },
  },
  mutations: {
    incrementHomeScore: (state, points) => {
      console.log('increment home score commit received...')
      console.log(state + ' - ' + points)
      state.homeScore += points
      console.log('increment home score committed to state')
    },
    incrementAwayScore: (state, points) => {
      console.log('increment away score commit received...')
      console.log(state + ' - ' + points)
      state.awayScore += points
      console.log('increment away score committed to state')
    }
  },
  actions  : {}
})
