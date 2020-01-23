<template>
  <div id="curriculum-vitae">
    <header>
      <div class="container">
        <h1>Curriculum Vitae</h1>
      </div>
    </header>
    <div class="container-fluid">
      <nk-timeline :value="cv"></nk-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cv: [
        {
          image: '/images/consulting.svg',
          title: 'SEVEN PRINCIPLES AG',
          subtitle: 'Junior Consultant',
          start: 'September 2018',
          end: 'current',
          location: 'Hamburg',
          chips: ['Vue.js', 'DevOps', 'CI/CD', 'Git', 'PHP', 'Project Management', 'Scrum', 'WordPress'],
          content: [
            'Back in Hamburg I wanted to work in a bigger company again. Having experience in consulting and development I found a fitting job in an international team. Currently I am mainly working on our in-house Mobile Device Management software where I implemented a new frontend with Vue.js and took over tasks of the maintainer of several project parts. I also introduced GitLab with it\'s CI/CD to them and helped the transition from SVN to Git.',
            'Since I am still a consultant and not an engineer I am also working directly with customers. Our core sectors are telekommunication, automotive, energy and transport, travel and logistics. We accompany our customers in the digital transformation process by helping to expand their business model and providing custom solutions for their individual needs.'
          ]
        },
        {
          image: '/logo.svg',
          title: 'Self-employed',
          start: 'June 2016',
          end: 'August 2018',
          location: 'Cuxhaven',
          chips: ['Project Management', 'Webdesign', 'WordPress', 'Node.js', 'Electron'],
          content: [
            'I was in need of getting back into my hometown for personal reasons. As jobs in IT are very sparse there I made the decision to risk something. It was not an easy time for me financially but in the end I came out round about with what I started but so much experience gained.',
            'I worked for SMB\'s creating mainly websites and small in-house projects. Having the ability to work on my own made it possible using the tech stack I wanted to try out. This way I came in touch with Electron giving me the ability to use web technologies I already knew to create desktop applications.'
          ]
        },
        {
          image: '/images/search-engine-optimization.svg',
          title: 'explido»iProspect',
          subtitle: 'Trainee SEO',
          start: 'May 2015',
          end: 'May 2016',
          location: 'Hamburg',
          chips: ['SEO', 'SEA'],
          content: [
            'While doing my "Ausbildung" and creating first websites for customers I was getting in touch with various optimization techniques. Wanting to deepen this knowledge I applied for a SEO trainee program.',
            'Getting a borader view of marketing and later specializing in technical SEO as well as getting experience consulting customers was very beneficial for my later work.'
          ]
        },
        {
          image: '/images/start-coding.svg',
          title: 'BBS II Stade',
          subtitle: 'Training as an IT specialist for application development',
          start: 'July 2012',
          end: 'June 2015',
          location: 'Stade',
          chips: ['PHP', 'WordPress', 'Joomla'],
          content: [
            'I started my development carreer directly after school. In germany it is typical to either go to university or do three years of so called "Ausbildung". Doing so I was working half of the time in a company getting practical training and the other half going to a specialized school for theory.',
            'The company I worked in specialized in web development. We mainly focused on custom Joomla and WordPress themes but also created a SAAS application for real estate agents. It allowed them to not only manage their properties and publish those to many big listing websites but also to build a website around it.'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
#curriculum-vitae {
  header {
    background-color: $color-primary;
    color: $color-foreground;
    text-align: center;
    padding: $spacer * 2 0;

    h1 {
      border: none;
      margin: 0;
    }
  }
}
</style>