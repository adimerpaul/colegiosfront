<template>
  <div class="about">
    <h1>This is an about pages</h1>
    <form @submit.prevent="guardar">
      <input style="width: 15%" type="text" placeholder="ci" v-model="teacher.ci">
      <input style="width: 15%" type="text" placeholder="Nombre" v-model="teacher.nombre">
      <input style="width: 15%" type="text" placeholder="celular" v-model="teacher.celular">
      <input style="width: 15%" type="text" placeholder="Direccion" v-model="teacher.direccion">
      <input style="width: 15%" type="text" placeholder="Salario" v-model="teacher.salario">
      <button style="width: 20%;background: #42b983"  type="submit">{{boolcreate?'CREAR':'MODIFICAR'}}</button>
    </form>
    <table border="1" style="width: 100%">
      <thead>
      <tr>
        <th>CI</th>
        <th>Nombre</th>
        <th>Celular</th>
        <th>Direccion</th>
        <th>Salario</th>
        <th>Opciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="t in teachers" :key="t.id">
        <td>{{t.ci}}</td>
        <td>{{t.nombre}}</td>
        <td>{{t.celular}}</td>
        <td>{{t.direccion}}</td>
        <td>{{t.salario}}</td>
        <td>
          <button @click="eliminar(t)">Eliminar</button>
          <button @click="modificar(t)">Modificar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data(){
    return{
      teachers:[],
      teacher:{},
      boolcreate:true,
    }
  },
  created() {
    this.misdatos()
  },
  methods:{
    guardar(){
      if (this.boolcreate)
      this.axios.post('/teacher',this.teacher).then(()=>{
        this.misdatos()
        this.teacher={}
      })
      else
        this.axios.put('/teacher/'+this.teacher.id,this.teacher).then(()=>{
          this.misdatos()
          this.teacher={}
          this.boolcreate=true
        })
    },
    eliminar(t){
      this.axios.delete('/teacher/'+t.id).then(()=>{
        this.misdatos()
      })
    },
    modificar(t){
      console.log(t)
      this.teacher=t
      this.boolcreate=false
      // this.axios.delete('/teacher/'+t.id).then(()=>{
      //   this.misdatos()
      // })
    },
    misdatos(){
      this.axios.get('/teacher').then(res=>{
        this.teachers=res.data
      })
    }
  },
  computed:{

  },
  mounted() {

  }
}
</script>
