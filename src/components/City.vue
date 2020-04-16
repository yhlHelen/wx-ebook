<template>
  <div class="city">
    <span  @click="handleChange()">{{this.test}}</span>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
  export default {
      name: 'City',
      methods: {
          handleChange() {
              this.$store.dispatch('setTest', 10)
          },
          showData() {
              console.log(mapGetters)
          }
      },
      mounted() {
        this.showData()
      },
      computed: {
          ...mapGetters(['test'])
      }
  }
</script>

<style scoped>

</style>
