<template>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            name="Username"
            label="Username"
            id="Username"
            prepend-icon="mdi-account-circle"
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            name="password"
            label="Enter your password"
            prepend-icon="mdi-lock"
            :append-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="isPasswordVisible = !isPasswordVisible"
            isPasswordVisible="Password"
            :type="isPasswordVisible ? 'password' : 'text'"
            v-model="password"
            :rules="passwordRules"
          ></v-text-field>
          <v-text-field
            name="name"
            label="Repeat your password"
            prepend-icon="mdi-lock"
            :append-icon="isPasswordConfirmVisible ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="isPasswordConfirmVisible = !isPasswordConfirmVisible"
            isPasswordConfirmVisible="Password"
            :type="isPasswordConfirmVisible ? 'password' : 'text'"
            v-model="confirmPassword"
            :rules="passwordRules"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">REGISTER</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data: () => ({
    isPasswordVisible: true,
    isPasswordConfirmVisible: true,
    password: '',
    confirmPassword: '',
    matchPassword: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 32) || 'Name must be less than 32 characters'
    ]
  }),
  computed: {
    passwordRules () {
      const rules = []
      if (this.password != this.confirmPassword) {
        rules.push('Passwords must be equal')
      }
      return rules
    }
  }
}
</script>

<style>

</style>