<template>
  <div>
    <b-container class="game-screen">
      <b-card id="score-board-card">
        <b-row>
          <b-col class="score-box-title">
            <div>
              <h1 class="text-uppercase">home</h1>
            </div>
          </b-col>
          <b-col>
            <span id="time-display" class="text-white">20:00</span>
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
          <b-col>
            <div class="btn-td">
              6
            </div>
            <div class="btn-extra-pt">
              1
            </div>
            <div class="btn-two-pt">
              2
            </div>
          </b-col>
          <b-col>
            <div class="btn-td">
              6
            </div>
            <div class="btn-extra-pt">
              1
            </div>
            <div class="btn-two-pt">
              2
            </div>
          </b-col>
        </b-row>
      </b-card>
      <b-btn id="timer-button" class="text-uppercase">start</b-btn>
    </b-container>
  </div>
</template>

<script>

  export default {
    name      : "game-manager",
    components: {},
    data() {
      return {
        homeScore: 46,
        awayScore: 0
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
  /*.game-screen {*/
  /*padding: 0;*/
  /*margin: 0;*/
  /*background: #A6192E;*/
  /*color: #fff;*/
  /*height: 1000px;*/
  /*}*/

  .game-screen {
    background: #A6192E;
  }

  #time-display {
    font-size: 3.5rem;
    margin-top: -.25rem;
    line-height: 0.6;
    font-family: 'Ubuntu', 'sans-serif'!important;
  }

  .btn-td {
    height: 100px;
    color: #fff;
    background: #A2AAAD;
    font-size: 8rem;
    font-weight: 900;
    font-family: 'Ubuntu', 'sans-serif'!important;
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
    font-family: 'Ubuntu', 'sans-serif'!important;
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
    font-family: 'Ubuntu', 'sans-serif'!important;

  }

  .score-box-title {
    padding-bottom: 1rem;
    font-family: 'Ubuntu', 'sans-serif'!important;
  }

  #score-board-card {
    margin: 0;
    padding: 0;
    background: #222;
  }

  #score-buttons-card {
    background: #001E62;
    -webkit-text-stroke: 1px black;
  }

  #timer-button {
    width: 85vw;
    margin-top: 2rem;
    font-size: 3rem;
    font-family: 'Ubuntu', 'sans-serif'!important;
    font-weight: 700;
    color: #090;
    background: #fff;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
</style>
