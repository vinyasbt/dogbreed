import axios from 'axios';
export function getAllDogsList(){
    console.log("in service")
    return axios.get('https://dog.ceo/api/breeds/list/all');
}
export function getDogRandomImage(dogname){
    console.log("in service random image",dogname)
    return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random`);
}
export function getAllDogImage(dogname,subbreedname){
    console.log("in service all image",subbreedname)
    if(subbreedname==undefined)
    {
    return axios.get(`https://dog.ceo/api/breed/${dogname}/images`);
    }
    else{
        return axios.get(`https://dog.ceo/api/breed/${dogname}/${subbreedname}/images`);
    }
}
export function getHomeDogRandomImage(){
    return axios.get(`https://dog.ceo/api/breeds/image/random/48`);
}