<template>
  <div>
    <header class="header"><h2><i>Welcome to Pup Images</i></h2></header>
    <Search :dogNames=dogsList :dogObject=dogobject />
    <div class="aside">
      <h2><i>dog breeds</i></h2>
    <ul v-for="(d,index) in dogsList" :key="index">
      <a href="" @click.prevent="dogInfo(d)">{{d}}
        <img :src="dogRandomImage[index]" class="asidephoto" />
      </a>
      
    </ul>
    <!-- <div v-for="r in random" :key="r">
      {{r.name}}
      <img :src="r.picture" />
    </div> -->
    </div>
    <table class="photo">
      <div v-if="subBreed.length>0">
           <br /> <label class="label">please select sub breed of {{dogName}}</label>
            <select v-model="subBreedName">
            <option v-for="(sb,index) in subBreed" :key="index">{{sb}}</option>
        </select>
        </div>
      <tr v-for="(image,index) in homeDogImages" :key="index" class="grid">
        <img :src="image" class="dogimage"/>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "../views/Search.vue";
import {getAllDogsList,getHomeDogRandomImage,getDogRandomImage} from '../api.service.js'
export default {
  name: "Home",
  data(){
    return{
      dogsList:[],
      dogRandomImage:[],
      dogobject:{},
      homeDogImages:[],
      subBreed:[],
      subBreedName:'',
      dogName:''
    }
  },
  created(){
    getAllDogsList().then(res=>{
      this.dogsList=Object.keys(res.data.message);
      console.log("dogslissst",this.dogsList);
      this.dogobject=res.data.message;
      console.log("dogobject",this.dogobject)
      this.dogsList.map((dogname)=>{
        getDogRandomImage(dogname).then(res=>{
      console.log("test",dogname)
      this.dogRandomImage.push(res.data.message);
      console.log("dogsimages",this.dogRandomImage)
    })
      })
    })
  
    getHomeDogRandomImage().then(res=>{
      this.homeDogImages=res.data.message
    })
  },
  components: {
    Search
  },
  methods:{
    dogInfo(data){
      console.log(data)
      this.dogName=data;
      if(this.dogobject[data].length>0)
            {
                this.subBreed=this.dogobject[data];
                console.log("subbreed",this.subBreed)
            }
            else{
              this.$router.push({name:'About',params:{name:data}})
            }
    }
    
  },
  watch:{
    subBreedName(){
      this.$router.push({name:'About',params:{name:this.dogName,subbreedname:this.subBreedName}})
    }
  }
  
};
</script>
<style scoped>


.aside{
  margin-left: 10px;
  width: 20%;
  background-color:lightyellow
}
.list{
  width: 25%
}
.grid{
  width: 150px;
  border-radius: 50%;
  margin:45px;
  float: left;
  height: 235px;
  
}
.dogimage{
  width:200px;
  height:235px;
  border-radius: 50%;
}

.photo{
  margin-left: 260px;
  width: 80%;
  background-color:black;
  margin-top: -3965px;
}

.header{
  margin-top: -50px;
  color: tomato;
}
.label{
    color: lightblue;
    font-size: 20px;
}

.asidephoto{
   width:40px;
  height:25px;
  border-radius: 50%;
}

</style>
