import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)
Vue.use(moment)

export const store = new Vuex.Store({
  state    : {
    homeScore           : 0,
    awayScore           : 0,
    timeRemaining       : 0,
    halfLength          : 0,
    halfEndTime      : {},
    showHomeTitlePopover: false,
    showAwayTitlePopover: false,
    showGameClockPopover: false,
    showTimerSetupButton: true,
    showStartButton     : false,
    showStopButton      : false
  },
  getters  : {
    getState               : state => {
      console.log(state)
      return state
    },
    getHomeScore           : state => {
      return state.homeScore
    },
    getAwayScore           : state => {
      return state.awayScore
    },
    getTimeRemaining       : state => {
      return state.timeRemaining
    },
    getShowHomeTitlePopover: state => {
      return state.showHomeTitlePopover
    },
    getShowAwayTitlePopover: state => {
      return state.showAwayTitlePopover
    },
    getHalfEndTime: state => {
      return state.halfEndTime
    },
    getHalfLength: state => {
      return state.halfLength
    }
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
    },
    setHalfEndTime : (state, time) => {
      console.log('setHalfEndTime commit received...')
      state.halfEndTime = time
      console.log('setHalfEndTime committed to state...');
    },
    setHalfLength : (state, time) => {
      console.log('setHalfLength commit received...')
      state.halfLength = time
      console.log('setHalfLength committed to state...');
    }
  },
  actions  : {
    startClock : (context) => {

    }
    // startClock : (context) => {
    //   now: Math.trunc((new Date()).getTime() / 1000)
    //   x``
    // }
  }
})
