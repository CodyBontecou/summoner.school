<template>
  <div>
    <div
      id="header"
      class="p-10 md:p-24 flex text-secondary-500 text-6xl sm:text-8xl md:text-9xl"
    >
      <div class="flex flex-col">
        <h1 class="z-10">Optimize your gameplay</h1>
        <!-- <div class="hidden md:block divider"></div> -->
      </div>
      <blob-header class="z-0 absolute right-0 -top-64 md:-top-16" />
    </div>
    <img
      class="relative z-10 mt-10 md:mt-18"
      src="summoner-school-preview.png"
      alt="Preview of what Summoner.school will look like within desktop browsers"
    />
    <!-- BLOB Description -->
    <div class="relative overflow-hidden">
      <blob-body class="hidden md:block md:-mt-96" />
      <div class="md:absolute top-0 z-10 p-10 md:p-28">
        <h2
          class="text-secondary-500 text-7xl text-6xl sm:text-8xl md:text-9xl"
        >
          Summoner school
        </h2>
        <p
          class="mt-8 leading-10 md:leading-80px text-secondary-300 text-xl md:text-5xl md:w-3/4"
        >
          is being built to provide players with a hub to share, discuss, and
          rate each others in-game replays.
        </p>
      </div>
    </div>

    <!-- Join the waitlist -->
    <div
      class="mt-10 md:mt-20 pb-24 text-center flex flex-col items-center justify-center"
    >
      <h3 class="text-secondary-500 text-7xl">Join the waitlist</h3>
      <form
        name="signup"
        method="POST"
        data-netlify="true"
        class="w-10/12 mt-10 md:mt-24 flex items-center justify-center"
      >
        <input type="hidden" name="form-name" value="signup" />
        <label for="email"> </label>
        <input
          id="email"
          class="w-full md:w-1/2 text-xl md:text-4xl border-gray-300 py-6 px-4 rounded-lg shadow-lg bg-form-background placeholder-form-placeholder text-form-placeholder focus:outline-none focus:border-secondary-500 focus:ring focus:ring-primary-500"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <form-button class="z-10 -ml-20" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.divider {
  @apply border mt-8 w-1/2;
  border-color: rgba(108, 94, 207, 0.3);
}
.top-25 {
  top: 25%;
}
</style>
