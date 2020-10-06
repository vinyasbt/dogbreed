<template>
    <div class="search">
        <!-- <input type="text" v-model="searchData" />-->
        
        <label class="label">Search Breed</label>
        <select v-model="searchData">
            <option v-for="d in dogNames" :key="d">{{d}}</option>
        </select>
        <div v-if="subBreed.length>0">
           <br /> <label class="label">please select sub breed of {{searchData}}</label>
            <select v-model="subBreedName">
            <option v-for="sb in subBreed" :key="sb">{{sb}}</option>
        </select>
        </div>
    </div>
</template>
<script>
export default {
    name:"Search",
    data(){
        return{
          searchData:'',
          subBreed:[],
          subBreedName:''
        }
    },
    props:{
        dogNames:{
            type:Array
        },
        dogObject:{
            type:Object
        }
    },
    watch:{
        searchData(){
            if(this.dogObject[this.searchData].length>0)
            {
                console.log("watcher called")
                this.subBreed=this.dogObject[this.searchData];
                console.log("subbreed",this.subBreed)
            }
            else{
this.$router.push({name:'About',params:{name:this.searchData}})
            }
        },
        subBreedName(){
            if(this.subBreed.length>0){
console.log("inside if",this.subBreedName)
this.$router.push({name:'About',params:{name:this.searchData,subbreedname:this.subBreedName}})
            }
        }
    }
}
</script>
<style scoped>
.search{
    background-color: blue
}
.label{
    color: lightblue;
    font-size: 20px;
}
</style>