<template>
  <div id="tutorials">
    <header>
      <div class="container">
        <h1>{{ $page.title }}</h1>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6" v-for="(tutorial) in value">
          <nk-teaser :value="tutorial"></nk-teaser>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
header {
  background-color: $color-primary;
  color: $color-foreground;
  text-align: center;
  padding: $spacer * 2 0;
  margin-bottom: $spacer * 2;

  h1 {
    border: none;
    margin: 0;
  }
}
</style>

<script>
export default {
  props: ['value']
}
</script>