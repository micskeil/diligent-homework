import type { Movie } from '@/models'

const movieCache = new Map<string, any>()
const cacheResponse = (query: string, page: number, data: {
  movies: Movie[],
  totalPages: number
}) => {
  movieCache.set(`${query}-${page}`, data)
  // delete cache after 2 minutes
  setTimeout(() => movieCache.delete(`${query}-${page}`), 120000)
}



export default defineEventHandler(async (event) => {
  const { apiSecret, public: { apiBase } } = useRuntimeConfig();
  const { searchValue, page} = getQuery(event);

  //check if the movie is in the cache
  const cachedMovie = movieCache.get(`${searchValue}-${page}`)
  if(cachedMovie) {
    return {
      body: JSON.stringify({
        movies: cachedMovie.movies,
        fromCache: true,
        totalPages: cachedMovie.totalPages,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }

  if(!searchValue) {
    return;
  }

  const response = await fetch(`${apiBase}/search/movie?api_key=${apiSecret}&query=${searchValue}&page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  })

  const data = await response.json()

  // cache the response
  cacheResponse(searchValue as string, page as number, {
    movies: data.results,
    totalPages: data.total_pages,
  })

  return {
    body: JSON.stringify({
      movies: data.results,
      fromCache: false,
      totalPages: data.total_pages,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
})