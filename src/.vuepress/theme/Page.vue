<template>
  <div id="page">
    <header>
      <div class="container">
        <h1>{{ $page.title }}</h1>
      </div>
    </header>
    <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-1 col-xl-2"></div>
          <div class="col-xs-12 col-lg-10 col-xl-8">
            <nk-card>
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
}
</style>