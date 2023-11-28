import type { Movie } from '@/models'


export async function useFetchMovies (searchValue: string, pageNumber: number = 1): Promise<{movies: Movie[], fromCache: Boolean, totalPages: number}> {
  if(!searchValue) {
    return {
      movies: [],
      fromCache: false,
      totalPages: 0,
    }
  }

  console.log(`Fetching movies for searchValue: ${searchValue} and pageNumber: ${pageNumber}`)
  // fetch movies from the backend
  const {
    data,
    status,
    error,
  } = await useFetch(`/api/movies?searchValue=${searchValue}&page=${pageNumber}`, {
    method: 'GET',
  })

  if(error.value || status.value !== 'success') {
    // handle error here
    const errorMessages = error.value ? error.value as unknown as string : 'Something went wrong'
    console.error(errorMessages)
    throw new Error(errorMessages)
  }

  // TODO: add typing to data.value.body
  const movies = (JSON.parse(data.value?.body as string) as any) as {movies: Movie[], fromCache: Boolean, totalPages: number};

  return movies
}