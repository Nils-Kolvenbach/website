<template>
  <div class="game-of-life">
    <div class="field container-fluid">
      <div v-for="(row, rowIndex) in field" :key="`row-${rowIndex}`" class="row">
        <div v-for="(cell, columnIndex) in row" :key="`row-${rowIndex}-column-${columnIndex}`" @click="toggle({x: columnIndex, y: rowIndex})" class="cell">
          <div :class="{ 'alive': isAlive({x: columnIndex, y: rowIndex}), 'dead': isAlive({x: columnIndex, y: rowIndex}) === false }"></div>
        </div>
      </div>
      <transition name="fade">
        <div v-show="showDescription" class="description">
          <nk-card title="Conway's Game of Life" :closable="true" @close="showDescription = false">
            <p>What you see here is my implementation of "<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">Conway's Game of Life</a>" as a Vue.js component. You can interact with it by clicking at a cell to toggle it's state. Have a look at the <a href="https://github.com/Nils-Kolvenbach/website/tree/master/.vuepress/components" target="_blank" rel="noopener noreferrer">source code at GitHub</a>, where you can also find the website itself.</p>
          </nk-card>
        </div>
      </transition>
    </div>
    <div class="controls">
      <div class="generation">Generation: {{ generation }}</div>
      <button v-if="running === false" @click="start()"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></button><button v-else @click="stop()"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" class="svg-inline--fa fa-pause fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg></button><button @click="randomize()"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="random" class="svg-inline--fa fa-random fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"></path></svg></button><button @click="showDescription = !showDescription"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info" class="svg-inline--fa fa-info fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg></button>
    </div>
  </div>
</template>

<script>
/**
 * My implementation of Conway's Game of Life as a Vue.js component
 * 
 * @see {@link https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life}
 */
export default {
  props: {
    rows: {
      type: Number,
      default: 10
    },
    columns: {
      type: Number,
      default: 10
    },
    ticksPerSecond: {
      type: Number,
      default: 2
    }
  },

  data() {
    return {
      field: [],
      nextField: [],
      running: false,
      showDescription: false,
      intervalId: null,
      generation: 0,
      /**
       * Represents all possible cell states and is immutable
       * 
       * @readonly
       * @enum {number}
       */
      state: Object.freeze({
        dead: 0,
        alive: 1
      })
    }
  },

  computed: {},

  methods: {
    /**
     * Initializes the field based on given size 
     * ("rows" & "columns" properties) with dead cells
     */
    init() {
      // Initialize the field with x amount of rows...
      this.field = Array(this.rows).fill(
        // ...which have y amount of columns with a state of "dead"
        Array(this.columns).fill(this.state.dead)
      );
      this.randomize();
    },
    /**
     * Iterates over all cells and assigns them a random state
     * 
     * @todo Find out why the first call to this method always fills complete columns
     */
    randomize() {
      this.field.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
          const state = (Math.random() < 0.2) ? this.state.alive : this.state.dead;
          this.setState({x: columnIndex, y: rowIndex}, state, true);
        });
      });
      this.generation = 0;
    },
    /**
     * A tick represents an update to the games state
     * 
     * This method iterates over all cells and 
     * applies them a state based on given rules.
     * 
     * Following the rules, I need to calculate all cells state at once.
     * To do that I created a simple duplicate of the whole field, 
     * calculated the state based on the "current" and 
     * applied all changes to the "next" field.
     * This way no cells state change affects surrounding cells.
     */
    tick() {
      // JSON.parse(JSON.stringify()) is a simple but kind of hacky way to 
      // break the reference to another variable.
      // But since I only use it to store primitive types, it's probably the easiest
      // solution without including a library or writing a custom method.
      this.nextField = JSON.parse(JSON.stringify(this.field));
      this.field.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
          this.applyRules({x: columnIndex, y: rowIndex});
        });
      });
      // Simple check for equality. The same limitations as above apply. It's kinda hacky.
      if (JSON.stringify(this.nextField) === JSON.stringify(this.field)) {
        // Reset if the field did not change
        this.randomize();
      } else {
        // Apply the new field
        this.field = JSON.parse(JSON.stringify(this.nextField));
        this.generation++;
      }
    },
    /**
     * Starts the game by setting an interval of ticks 
     * which speed is based on given "ticksPerSecond" property
     */
    start() {
      this.intervalId = setInterval(() => {
        this.tick();
      }, 1000 / this.ticksPerSecond);
      this.running = true;
    },
    /**
     * Simply clears the interval set by the start method and 
     * therefore stops game ticks from happening
     */
    stop() {
      clearInterval(this.intervalId);
      this.running = false;
    },
    /**
     * Checks if the cell at given position is alive or not
     */
    isAlive(position) {
      return this.getState(position) === this.state.alive;
    },
    /**
     * Counts and returns the amount of living neighbors of the cell by given position
     */
    countLivingNeighbors(position) {
      let neighbors = 0;
      // Let's define all possible operations to reduce the amount of duplicate code
      const operations = [
        [1, 1],
        [0, 1],
        [1, 0],
        [1, -1],
        [-1, 1],
        [-1, 0],
        [0, -1],
        [-1, -1]
      ];
      operations.forEach((operation) => {
        if (this.isAlive({x: position.x + operation[0], y: position.y + operation[1]}) === true) {
          neighbors++;
        }
      });
      return neighbors;
    },
    /**
     * Toggles the state of given cell from alive to dead and vice versa
     */
    toggle(position) {
      if (this.isAlive(position)) {
        this.setState(position, this.state.dead, true);
      } else {
        this.setState(position, this.state.alive, true);
      }
    },
    /**
     * Returns the state of given cells position
     * 
     * Returns dead state if the position does not exist,
     * which is a simple out of bounds check - e.g. outside the field.
     */
    getState(position) {
      if (this.field[position.y] && this.field[position.y][position.x]) {
        return this.field[position.y][position.x];
      }
      return this.state.dead;
    },
    /**
     * Sets the state of given cells position
     * 
     * It does that to the "next" field by default.
     * It's possible to apply the change to the current field
     * instead by passing immediate = true.
     */
    setState(position, state, immediate = false) {
      if (immediate === true) {
        this.field[position.y][position.x] = state;
      } else {
        this.nextField[position.y][position.x] = state;
      }
    },
    /**
     * Modifies given cells state by checking against the games rules
     * 
     * The code for it could be reduced quite a bit.
     * I decided against it to make it easier to read.
     */
    applyRules(position) {
      const livingNeighbors = this.countLivingNeighbors(position);
      if (this.isAlive(position) === true) {
        // Cell is alive
        if (livingNeighbors < 2) {
          // Rule 2: If less then 2 neighbors, the cell dies from lonelyness
          this.setState(position, this.state.dead);
        } else if (livingNeighbors > 3) {
          // Rule 4: If more then 3 neighbors, the cell dies from overpopulation
          this.setState(position, this.state.dead);
        }
        // Rule 3: If 2 or 3 neighbors, the cell lives (nothing happens)
      } else if (livingNeighbors === 3) {
        // Cell is dead
        // Rule 1: If cell is dead and it has exactly 3 living neighbors, the cell is reborn
        this.setState(position, this.state.alive);
      }
    }
  },

  created() {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
.game-of-life {
  position: relative;
  width: 100%;

  .row {
    .cell {
      @include col-base;
      padding: 0;
      flex: 1 1 auto;

      &:before {
        display: block;
        content: "";
        padding-top: 100%;
      }

      > .alive {
        @include fill-container;
        background-color: lighten($color-primary, 5%);
      }

      > .dead {
        @include fill-container;
        background-color: transparent;
      }

      > .alive,
      > .dead {

        &:hover {
          background-color: $color-light;
        }
      }
    }
  }

  .description {
    @include fill-container;
    z-index: 2;
    color: $color-text;

    .card {
      margin-top: $spacer * 3;
      text-align: left;
    }
  }

  .controls {
    margin-top: $spacer;

    svg {
      height: $spacer;
    }

    .generation {}
  }
}
</style>