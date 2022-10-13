export const getSearch = async(search)=>{
    const url = `https://api.themoviedb.org/3/search/multi?api_key=73c0b8a4dbda53191e7ac8e43ed8a8ec&language=en-US&query=${search}&page=1`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(search)
   return data;
  }
