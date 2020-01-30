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
            'Back in Hamburg I wanted to work in a larger company again. With my experience in consulting and development I found a suitable position in an international team. Currently I am mainly working on our proprietary Mobile Device Management software, where I implemented a new frontend with Vue.js and took over tasks of the maintainer of various project parts. I also introduced them to GitLab with its CI/CD and helped with the transition from SVN to Git.',
            'Since I am still a consultant and not an engineer, I also work directly with customers. Our core areas are telecommunications, the automotive industry, energy and transport, travel and logistics. We accompany our clients in the digital transformation process by helping them to expand their business model and offer tailor-made solutions for their individual needs.'
          ]
        },
        {
          image: '/images/self-employed.svg',
          title: 'Self-employed',
          start: 'June 2016',
          end: 'August 2018',
          location: 'Cuxhaven',
          chips: ['Project Management', 'Webdesign', 'WordPress', 'Node.js', 'Electron'],
          content: [
            'I had to return to my home town for personal reasons. Since jobs in the IT industry are very scarce there, I made the decision to risk something. It wasn\'t an easy time for me financially, but in the end it all worked out and I gained so much experience.',
            'I worked for SMB\'s mainly creating websites and small internal projects. Since I had the opportunity to work independently, I was able to use the tech stack I wanted to try out. This is how I got in touch with Electron, which gave me the opportunity to use web technologies I already knew to create desktop applications.'
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
            'During my "Ausbildung" and the creation of first websites for customers I came into contact with various techniques like on-page, off-page and performance optimization. To deepen this knowledge, I applied for an SEO trainee program.',
            'Getting a broader view on marketing and later specializing in technical SEO as well as gaining experience in consulting clients was very beneficial for my later work.'
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
            'I started my development career right after school. In Germany it is typical to either study or complete a three-year apprenticeship called "Ausbildung" which is what I did. Half of the time I worked in a company to get practical training and the other half I went to a technical college for theory.',
            'The company I worked for specialized in web development. We mainly focused on custom Joomla and WordPress themes, but also created a SAAS application for real estate agents. It not only allowed them to manage their properties and publish them on many major listing websites, but also to create a custom website around them.'
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