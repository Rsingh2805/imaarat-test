<template>
  <v-app>
    <v-app-bar color="white" elevate-on-scroll fixed class="app-bar">
      <v-container class="d-flex">
        <v-img max-height="40px" max-width="40px" @click="redirect()" src="./assets/logo.jpg" />
        <v-spacer />
        <v-btn icon v-if="!$vuetify.breakpoint.mdAndUp" to="/about">
          <v-icon>mdi-account-group</v-icon>
        </v-btn>
        <v-btn icon v-if="!$vuetify.breakpoint.mdAndUp" to="/gallery">
          <v-icon>mdi-image-multiple</v-icon>
        </v-btn>
        <v-btn text v-if="$vuetify.breakpoint.mdAndUp" to="/about">
          About
        </v-btn>
        <v-btn text v-if="$vuetify.breakpoint.mdAndUp" to="/gallery">
          Our Work
        </v-btn>
      </v-container>
      
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer dark class="py-10">
      <v-container>
        <div class="d-flex flex-row justify-space-between">
          <div class="flex-grow-1">
            <p class="text-h6 font-weight-black">Imaarat Architects & Design Studio</p>
            <p>
              Building experiences that matter
            </p>
            Bla bla bla street <br />
            123310
          </div>
          <v-divider vertical class="mx-2" />
          <v-row class="text-center" v-if="$vuetify.breakpoint.mdAndUp">
            <v-col cols="6">Home</v-col>
            <v-col cols="6">Our services</v-col>
            <v-col cols="6">About us</v-col>
          </v-row>
          <v-divider vertical class="mx-2" v-if="$vuetify.breakpoint.mdAndUp" />
          <div class="flex-grow-1 text-right">
            <div>
              +91 8128129120
              <v-btn icon>
                <v-icon>mdi-phone</v-icon>
              </v-btn>
            </div>
            <div>
              imaarat@gmail.com
              <v-btn icon>
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </div>
            <div>
              Bla bla bla, Panipat, 132103
              <v-btn icon>
                <v-icon>mdi-pin</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
  .menu-btn {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 1;
  }
  .app-bar{
    top: 0;
  }
</style>

<script>

export default {
  methods: {
    redirect () {
      this.$router.push('/')
    }
  }
}
</script>