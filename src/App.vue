<template>
  <v-app>
    <v-btn fab color="white" class="elevation-0 menu-btn">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-main>
      <home />
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
          <v-row class="text-center">
            <v-col cols="6">Home</v-col>
            <v-col cols="6">Our services</v-col>
            <v-col cols="6">About us</v-col>
            <v-col cols="6">Get in Touch</v-col>
          </v-row>
          <v-divider vertical class="mx-2" />
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

<script>
import Home from './views/Home'
export default {
  components: {Home}
}
</script>

<style lang="scss" scoped>
  .menu-btn {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 1;
  }
</style>