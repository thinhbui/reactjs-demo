import axios from 'axios';
module.exports = {
    fetchPolularRespo: (language) => {
        var url = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'
            + language + '&sort=start&order=desc&type=Repositores')
        return axios
            .get(url)
            .then((response)=>{
                return response.data.items;
            });
    }
}