<template>
  <div id="home">
    <section id="intro">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-3 col-lg-5 col-xl-6">
            <nk-asset class="show-lg illustration" title="Person with source code in background" :src="$withBase('/images/code.svg')" type="image"></nk-asset>
          </div>
          <div class="col-xs-12 col-md-9 col-lg-7 col-xl-6">
            <nk-asset title="Nils Kolvenbach" src="https://www.gravatar.com/avatar/fab7aa30c10fc4d7f2be8d8bd7ec4c2f?s=192" type="avatar"></nk-asset>
            <h1>Hi I am Nils Kolvenbach, <br>a Web Developer and Consultant working in Hamburg</h1>
            <p>Want to tell me about your project or company, <br>maybe even make me an offer I can't refuse? Here we go!</p>
            <p class="cta">
              <a href="https://calendly.com/nils-kolvenbach/lets-talk-business" target="_blank" rel="noopener noreferrer" class="button">Let's talk business</a>
              <a href="mailto:info@nils-kolvenbach.de">or send me an e-mail</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="facts" class="container">
      <nk-card>
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="factbox">
              <p class="icon"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></p>
              <p><span class="number">{{ yearsFromStart.toFixed(1) }}</span><span class="sub">years</span></p>
              <p>Professional Web Development</p>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="factbox">
              <p class="icon"><font-awesome-icon :icon="['fas', 'handshake']" /></p>
              <p><span class="number">{{ (daysExperience * 8).toFixed() }}</span><span class="sub">hours</span></p>
              <p>Worked on client projects</p>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="factbox">
              <p class="icon"><font-awesome-icon :icon="['fas', 'mug-hot']" /></p>
              <p><span class="number">{{ (daysExperience * 3).toFixed() }}</span><span class="sub">cups</span></p>
              <p>Coffee drunk</p>
            </div>
          </div>
        </div>
      </nk-card>
    </section>
    <section id="developer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-4">
            <h2>Full Stack: <br>Developing your project from Backend to Frontend</h2>
            <p>With a focus on JavaScript I am able to create Websites with Vue.js, API's and Backends with Node.js and Desktop clients with Electron.</p>
            <div class="row">
              <div class="col-xs-6 col-md-3" v-for="(tech) in developmentStack" :key="tech.name">
                <div class="technology">
                  <nk-asset :title="tech.name + ' logo'" type="image" :src="$withBase(tech.image)"></nk-asset>
                  <p>{{ tech.name }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-8">
            <nk-asset title="Person sitting in front of a computer and tablet" type="image" :src="$withBase('/images/full-stack.svg')"></nk-asset>
          </div>
        </div>
      </div>
    </section>
    <section id="devops">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-8">
            <nk-asset title="Person sitting in front of multiple monitors" type="image" :src="$withBase('/images/devops.svg')"></nk-asset>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4">
            <h2>DevOps: <br>Automating workflows to save you time and money</h2>
            <p>I use CI/CD pipelines to automate processes from linting and testing to deploying your infrastructure.</p>
            <div class="row">
              <div class="col-xs-6 col-md-3" v-for="(tech) in toolStack" :key="tech.name">
                <div class="technology">
                  <nk-asset :title="tech.name + ' logo'" type="image" :src="$withBase(tech.image)"></nk-asset>
                  <p>{{ tech.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="consultant">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-4">
            <h2>Consulting: <br>Helping your project to succeed</h2>
            <p>Sometimes creating great applications is the easy part. I attended training for project management and was able to prove my ability to do so.</p>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-8">
            <nk-asset title="Person consulting and analyzing" type="image" :src="$withBase('/images/consulting.svg')"></nk-asset>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      developmentStack: [
        {
          name: 'Vue.js',
          image: '/icons/vue-js.svg'
        },
        {
          name: 'Node.js',
          image: '/icons/node-js.svg'
        },
        {
          name: 'Electron',
          image: '/icons/electron.svg'
        },
        {
          name: 'PHP',
          image: '/icons/php.svg'
        }
      ],
      toolStack: [
        {
          name: 'AWS',
          image: '/icons/aws.svg'
        },
        {
          name: 'Git',
          image: '/icons/git.svg'
        },
        {
          name: 'Docker',
          image: '/icons/docker.svg'
        },
        {
          name: 'Linux',
          image: '/icons/linux.svg'
        }
      ]
    }
  },

  computed: {
    /**
     * Calculates the minutes passed since I started working professionally (not during my "Ausbildung")
     */
    minutesFromStart() {
      return (Math.abs(new Date('2016-07-01') - new Date()) / 1000) / 60;
    },
    /**
     * Calculates the years passed since my "Ausbildung"
     */
    yearsFromStart() {
      // A year has 525600 minutes
      return this.minutesFromStart / 525600;
    },
    /**
     * Calculates the days worked since my "Ausbildung"
     * 
     * Takes holidays and weekends into account.
     */
    daysExperience() {
      // 365 days minus 104 saturdays and sundays minus 10 public holidays minus 25 holidays
      return this.yearsFromStart * 226;
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
#intro {
  background-color: $color-primary;
  color: $color-foreground;
  padding-top: $spacer * 2;
  padding-bottom: $spacer * 6;
  text-align: center;

  @media only screen and (min-width: map-get($breakpoints, 'md')) {
    text-align: left;
    padding-top: $spacer * 8;
    padding-bottom: $spacer * 12;
  }

  .illustration {
    margin-left: -$spacer * 8;
  }

  .row {
    align-items: center;
  }

  .avatar {
    width: $spacer * 8;
    height: $spacer * 8;
    margin: 0 auto;
    margin-bottom: $spacer;

    @media only screen and (min-width: map-get($breakpoints, 'md')) {
      position: absolute;
      left: -$spacer * 9;
      top: $spacer;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: $spacer * 2;
    border: none;
  }

  .cta {
    a {
      display: block;
      margin: $spacer 0;

      @media only screen and (min-width: map-get($breakpoints, 'md')) {
        display: inline-flex;
      }

      &:first-of-type {
        border-radius: $border-radius;

        @media only screen and (min-width: map-get($breakpoints, 'md')) {
          margin-right: $spacer;
        }
      }
    }
  }
}

#facts {
  margin-top: -$spacer * 4;

  .card {
    margin-bottom: 0;
  }

  .factbox {
    padding: $spacer 0;
    text-align: center;

    p {
      margin: 0;
    }

    .icon {
      font-size: $spacer * 3;
      line-height: 1;
      color: $color-primary;
      margin-bottom: $spacer;
    }

    .number {
      font-size: $font-size * 2;
      font-weight: $font-weight-heading;
      line-height: 1;
    }

    .sub {
      color: $color-light;
      margin-left: $spacer / 2;
    }
  }
}

.technology {
  text-align: center;
  color: $color-primary;
}

#developer, #devops, #consultant {
  margin: $spacer * 5 0;
  padding: $spacer * 5 0;

  .row {
    align-items: center;
  }
}

#developer, #consultant {
  > .container > .row :first-child {
    order: 2;

    @media only screen and (min-width: map-get($breakpoints, 'md')) {
      order: 1;
    }
  }
  > .container > .row :last-child {
    order: 1;

    @media only screen and (min-width: map-get($breakpoints, 'md')) {
      order: 2;
    }
  }
}
</style>