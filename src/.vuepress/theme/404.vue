<template>
  <div id="not-found">
    <header>
      <div class="container">
        <h1>Page not found</h1>
      </div>
    </header>
    <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-1 col-xl-2"></div>
          <div id="image-container" class="col-xs-12 col-lg-10 col-xl-8">
            <nk-card>
              <nk-asset type="image" title="Page not found - 404" :src="$withBase('/images/404.svg')"></nk-asset>
              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <p>The page you were trying to access has been moved or never existed. There are two possibilities for that:</p>
                </div>
                <div class="col-xs-12 col-md-6">
                  <ol>
                    <li>If you followed a link on my site: <br>Then I screwed up. I'm sorry.</li>
                    <li>If you entered the URL yourself: <br>Please check it for typos.</li>
                  </ol>
                </div>
              </div>
            </nk-card>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/global';
#not-found {
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

  .container {
    .card {
      margin-top: $spacer * 8;

      .asset-container {
        margin-top: -$spacer * 6;
      }
    }
  }
}
</style>