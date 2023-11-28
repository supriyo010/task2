import axios from 'axios';
const API_URL="https://602e7c2c4410730017c50b9d.mockapi.io/users";
async function getUserData(){
    try{
        const response=await axios.get(API_URL);
        console.log(response.data);
        return response.data;
    }catch(error){
        return ('Error data does not Exist !');
    }
}
export {getUserData};