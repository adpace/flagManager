<template>
  <div>
    <b-container class="game-screen">
      <b-card id="score-board-card">
        <b-row>
          <b-col class="score-box-title">
            <div>
              <h1 class="text-uppercase m-0 p-0">home</h1>
            </div>
          </b-col>
          <b-col>
            <span id="time-display" class="text-white">
              <!--{{ minutes | two_digits }}:{{ seconds | two_digits }}-->
              20:00
            </span>
          </b-col>
          <b-col class="score-box-title">
            <div>
              <h1 class="text-uppercase">away</h1>
            </div>
          </b-col>
        </b-row>
        <b-row class="score-board">
          <b-col class="score-box">
            {{homeScore}}
          </b-col>
          <b-col class="score-box">
            {{awayScore}}
          </b-col>
        </b-row>
      </b-card>
      <b-card id="score-buttons-card">
        <b-row>
          <b-col style="padding: 0 -15px;">
            <div class="btn-td" @click="scoreHome(6)">
              6
            </div>
            <div class="btn-extra-pt" @click="scoreHome(1)">
              1
            </div>
            <div class="btn-two-pt" @click="scoreHome(2)">
              2
            </div>
          </b-col>
          <b-col style="padding: 0 -15px;">
            <div class="btn-td" @click="scoreAway(6)">
              6
            </div>
            <div class="btn-extra-pt" @click="scoreAway(1)">
              1
            </div>
            <div class="btn-two-pt" @click="scoreAway(2)">
              2
            </div>
          </b-col>
        </b-row>
      </b-card>
      <b-btn v-if="buttonState === 'start'" id="timer-button-start" class="timer-button text-uppercase">start</b-btn>
      <b-btn v-if="buttonState === 'stop'" id="timer-button-stop" class="timer-button text-uppercase">stop</b-btn>
      <b-row  style="padding: 0 -15px;">
        <b-col class="text-right" style="padding: 0 -15px;">
          <b-btn v-if="buttonState === 'other'" id="timer-button-12" class="timer-button text-uppercase">12</b-btn>
        </b-col>
        <b-col class="text-left" style="padding: 0 -15px;">
          <b-btn v-if="buttonState === 'other'" id="timer-button-20" class="timer-button text-uppercase">20</b-btn>
        </b-col>
      </b-row>
      <b-btn v-if="buttonState === 'other'" id="timer-button-other" class="timer-button text-uppercase">other</b-btn>
    </b-container>
  </div>
</template>

<script>
  export default {
    name      : 'game-manager',
    components: {},
    data () {
      return {
        now        : Math.trunc((new Date()).getTime() / 1000),
        twenty     : 20 * 60 * 1000,
        twelve     : 12 * 60 * 1000,
        buttonState: 'other'
      }
    },
    computed  : {
      halfEndTime () {
        return this.$store.getters.getHalfEndTime
      },
      homeScore () {
        return this.$store.getters.getHomeScore
      },
      awayScore () {
        return this.$store.getters.getAwayScore
      },
      seconds () {
        return (this.halfEndTime - this.now) % 60
      },
      minutes () {
        return Math.trunc((this.date - this.now) / 60) % 60
      }
    },
    methods   : {
      scoreHome (points) {
        this.$store.commit('incrementHomeScore', points)
      },
      scoreAway (points) {
        this.$store.commit('incrementAwayScore', points)
      },
      setHalfLength (time) {
        this.$store.commit('setHalfLength', time)
      },
      setTimerButton (name) {
        this.buttonState = name
      }
    }
  }
</script>

<style scoped>
  /*ROYAL BLUE*/
  /*HEX COLOR: #001E62;*/
  /*RED*/
  /*HEX COLOR: #A6192E;*/
  /*GRAY */
  /*HEX COLOR: #A2AAAD;*/

  .game-screen {
    background: #A6192E;
  }

  #time-display {
    font-size: 3.5rem;
    margin-top: -.25rem;
    line-height: 0.6;
    font-family: 'Ubuntu', 'sans-serif' !important;
  }

  .btn-td {
    height: 100px;
    color: #fff;
    background: #A2AAAD;
    font-size: 8rem;
    font-weight: 900;
    font-family: 'Ubuntu', 'sans-serif' !important;
    text-align: center;
    margin: 1rem;
    border: solid 3px #000;
    -webkit-border-radius: 14px 14px 0 0;
    -moz-border-radius: 14px 14px 0 0;
    border-radius: 14px 14px 0 0;
    vertical-align: center;
    line-height: 1.1;
    -webkit-box-shadow: inset 0px 0px 22px 6px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: inset 0px 0px 22px 6px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0px 0px 22px 6px rgba(0, 0, 0, 0.5);
  }

  .btn-extra-pt,
  .btn-two-pt {
    padding-top: 0.5rem;
    height: 80px;
    color: #fff;
    background: #A2AAAD;
    font-size: 4rem;
    font-weight: 900;
    font-family: 'Ubuntu', 'sans-serif' !important;
    text-align: center;
    margin: 1rem;
    border: solid 3px #000;
    -webkit-box-shadow: inset 0px 0px 22px 6px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: inset 0px 0px 22px 6px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0px 0px 22px 6px rgba(0, 0, 0, 0.5);
  }

  .btn-two-pt {
    -webkit-border-radius: 0 0 15px 15px;
    -moz-border-radius: 0 0 15px 15px;
    border-radius: 0 0 15px 15px;
  }

  .score-board {
    background: #222;
    color: #fff;
    margin: 0;
    padding: 0;
  }

  .score-box {
    background: #000;
    color: #fff;
    font-size: 6rem;
    margin: -.75rem .5rem;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    font-family: 'Ubuntu', 'sans-serif' !important;

  }

  .score-box-title {
    padding-bottom: 1rem;
    font-family: 'Ubuntu', 'sans-serif' !important;
  }

  #score-board-card {
    margin: 0;
    padding: 0;
    background: #222;
  }

  #score-buttons-card {
    background: #001E62;
    -webkit-text-stroke: 1px black;
    -webkit-border-radius: 0 0 15px 15px;
    -moz-border-radius: 0 0 15px 15px;
    border-radius: 0 0 15px 15px;
  }

  .timer-button {
    margin-top: 2rem;
    font-size: 3rem;
    font-family: 'Ubuntu', 'sans-serif' !important;
    font-weight: 700;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0px 0px 16px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: inset 0px 0px 16px 2px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0px 0px 16px 2px rgba(0, 0, 0, 0.5);
  }

  #timer-button-start {
    width: 95vw;
    color: #090;
    background: #fff;
  }

  #timer-button-stop {
    width: 95vw;
    color: #900;
    background: #fff;
  }

  #timer-button-20 {
    width: 97.5%;
    color: rgb(0, 153, 220);
    margin: 2rem 0 .1rem -9px;
    background: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    -webkit-border-bottom-left-radius: 0;
    -webkit-border-bottom-right-radius: 0;
  }

  #timer-button-12 {
    width: 97.5%;
    margin: 2rem -9px .1rem 0;
    color: rgb(0, 153, 220);
    background: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    -webkit-border-bottom-left-radius: 0;
    -webkit-border-bottom-right-radius: 0;
  }

  #timer-button-other {
    width: 85vw;
    color: rgb(0, 153, 220);
    background: #fff;
    margin-bottom: 5rem;
    margin-top: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    -webkit-border-top-left-radius: 0;
    -webkit-border-top-right-radius: 0;
  }
</style>
