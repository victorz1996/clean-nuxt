<template>
  <div>
    <v-app>
      <v-main>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="username"
                      name="user"
                      label="User"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      v-model="password"
                      name="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  layout: 'login',
})
export default class Index extends Vue {
  $auth: any
  username: string = ''
  password: string = ''

  async login() {
    const login = {
      typeDevice: 'WEB',
      username: this.username,
      password: this.password,
    }
    await this.$auth.loginWith('local', { data: login })
  }
}
</script>
