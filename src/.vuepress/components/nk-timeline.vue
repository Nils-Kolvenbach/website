<template>
  <div class="timeline">
    <div v-for="(row) in value" class="row">
      <div class="col-xs-12 col-lg-6">
        <h3>
          {{ row.title }}<br v-if="row.subtitle">
          <small v-if="row.subtitle">{{ row.subtitle }}</small>
        </h3>
        <p class="chips"><nk-chip v-for="(chip) in row.chips">{{ chip }}</nk-chip></p>
        <p><nk-asset :title="row.title" :src="$withBase(row.image)" type="image"></nk-asset></p>
      </div>
      <div class="col-xs-12 col-lg-6">
        <nk-card>
          <p class="time-location">[{{ row.start }} - {{ row.end }}] <!-- <span v-if="row.location" class="location"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker" class="svg-inline--fa fa-map-marker fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"></path></svg> {{ row.location }}</span> --></p>
          <p v-for="(paragraph) in row.content">{{ paragraph }}</p>
        </nk-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.timeline {
  // The line between
  &:before {
    position: absolute;
    left: $spacer / 2;
    content: "";
    height: 100%;
    border-right: 2px solid $color-primary;

    @media only screen and (min-width: map-get($breakpoints, 'lg')) {
      left: 50%;
    }
  }

  .time-location {
    // font-weight: bold;
    // font-size: $font-size-big;
    text-transform: uppercase;
    color: $color-light;
  }

  .location {
    margin-left: $spacer;

    svg {
      height: $font-size;
    }
  }

  .row {
    justify-content: center;
    padding: $spacer * 2 0;

    > div {
      padding-left: $spacer * 3;

      @media only screen and (min-width: map-get($breakpoints, 'lg')) {
        flex-basis: 800px;
        padding: 0 $spacer * 4;
      }

      .card {
        margin: 0;
      }
    }
  }

  .row > div:nth-child(odd) {
    h3 {
      margin-top: $spacer * 3;
    }

    // The dot between
    &:before {
      position: absolute;
      top: $spacer * 5.5;
      left: calc(#{$spacer} + 1px);
      content: "";
      width: $spacer;
      height: $spacer;
      border: 2px solid $color-primary;
      border-radius: 50%;
      background-color: $color-foreground;

      @media only screen and (min-width: map-get($breakpoints, 'lg')) {
        left: calc(-#{$spacer} / 2 + 1px);
      }
    }
  }

  @media only screen and (min-width: map-get($breakpoints, 'lg')) {
    .row > div:nth-child(even) {
      // The line to each dot
      &:before {
        position: absolute;
        top: calc(#{$spacer} * 6 - 1px);
        right: calc(#{$spacer} / 2 - 1px);
        content: "";
        width: $spacer * 4;
        border-bottom: 2px solid $color-primary;
      }
    }

    .row:nth-child(even) {
      flex-direction: row-reverse;
    }

    .row:nth-child(odd) > div:nth-child(odd) {
      text-align: right;

      &:before {
        left: initial;
        right: calc(-#{$spacer} / 2 - 1px);
      }
    }

    .row:nth-child(odd) > div:nth-child(even) {
      &:before {
        right: initial;
        left: $spacer / 2;
      }
    }
  }
}
</style>