const { default: axios } = require("axios");
require("dotenv").config();

const api_key = process.env.GIPHY_TOKEN;

const getGif = async () => {
    try {
        const response = await axios.get(
            `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=celebration&rating=g`)
        if (response) {
            console.log(response.data.data.embed_url);
        }
        return response.data.data.embed_url;
    } catch (error) {
        console.log(`Error getting gif: ${error}`);
    }
    
}
getGif();
 
module.exports = getGif;