<template>
  <div id="tutorials" class="container">
    <h1>Tutorials</h1>
    <div class="row">
      <div class="col-xs-12 col-md-6" v-for="(tutorial) in value">
        <nk-teaser :value="tutorial"></nk-teaser>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
</style>

<script>
export default {
  props: ['value']
}
</script>