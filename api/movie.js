const fetch = require("node-fetch");
const fs = require('fs')

const i = function(){
    let y = (Math.random()*['action','comedy'].length).toFixed()
    if(y==2){y = 0}
  
    return y
}

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=20a42d6058ff7cc0866897e2b9937b02")
  .then((res) => res.json())
  .then((json) => {
      return json.results.map((item=>{
        return{
            id:item.id,
            rank:item.vote_average,
            name:item.original_title,
            img:`https://image.tmdb.org/t/p/w500${item.poster_path}`,
            desc:item.overview,
            year:item.release_date.split('-').join(' '),
            type:arr[i()] 
        }
      }))
  })
  .then(data=>{
    fs.writeFile('data.json', JSON.stringify(data), 'utf8', (err)=>{
        err?console.log(err):console.log('ok');
    });
  })


