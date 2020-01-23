<template>
  <div id="page">
    <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-1 col-xl-2"></div>
          <div class="col-xs-12 col-lg-10 col-xl-8">
            <nk-card>
              <h1>{{ $page.title }}</h1>
              <Content/>
            </nk-card>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

#page {
  padding: $spacer * 2 0;

  h1 {
    margin-top: 0;
  }
}
</style>