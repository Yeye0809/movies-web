
export const getFilmById = async({id}) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=73c0b8a4dbda53191e7ac8e43ed8a8ec&language=en-US`;
    const res = await fetch(url);
    const data = await res.json();

    return data
}
