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
              <p class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path></svg></p>
              <p><span class="number">{{ yearsFromStart.toFixed(1) }}</span><span class="sub">years</span></p>
              <p>Professional Web Development</p>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="factbox">
              <p class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="handshake" class="svg-inline--fa fa-handshake fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg></p>
              <p><span class="number">{{ (daysExperience * 8).toFixed() }}</span><span class="sub">hours</span></p>
              <p>Worked on client projects</p>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="factbox">
              <p class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mug-hot" class="svg-inline--fa fa-mug-hot fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"></path></svg></p>
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
      margin-bottom: $spacer;

      svg {
        height: $spacer * 3;
        color: $color-primary;
      }
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
  margin: $spacer * 10 0;

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