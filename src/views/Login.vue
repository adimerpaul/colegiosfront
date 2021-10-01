<template>
<div>
  <form action="" @submit.prevent="login">
    <input v-model="user.email" type="email" placeholder="Email"><br>
    <input v-model="user.password" type="password" placeholder="password"><br>
    <input type="submit">
  </form>
</div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      user:{}
    }
  },
  methods:{
    login(){
      // console.log('a')
      this.$store.dispatch('login', this.user)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
