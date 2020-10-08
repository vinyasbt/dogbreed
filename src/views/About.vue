<template>
  <div class="about">
    <h2 class="label"><i>All Images of {{dogName}} {{dogSubBreedName}}</i></h2>
    <table>
      <tr v-for="dogImage in dogAllImageArray" :key="dogImage" class="grid">
        <img :src="dogImage" class="dogimage"/>
      </tr>
    </table>
  </div>
</template>
<script>
import {getAllDogImage} from '../api.service.js'
export default {
  name:"About",
  data(){
    return{
      dogName:this.$route.params.name,
      dogSubBreedName:this.$route.params.subbreedname,
      dogAllImageArray:[]
    }
  },
  created(){
getAllDogImage(this.dogName,this.dogSubBreedName).then(res=>{
  this.dogAllImageArray=res.data.message;
})
console.log(this.dogAllImageArray)
  }
}
</script>
<style scoped>
.grid{
  width: 300px;
  border-radius: 50%;
  border:1px solid #f1f1f1;
  margin:50px;
  float: left;
  height: 350px;
  
}
.dogimage{
  width:300px;
  height:350px;
  border-radius: 50%;
  border:5px solid #c4f37a;
}
.about{
  background-color: black;
  margin-top: -50px;
}
.label{
    color: lightblue; 
}
.grid:hover {
  transform: scale(1.5); 
}
</style>