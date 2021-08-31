import cover1 from '../assets/movie1.jpg'
import cover2 from '../assets/movie2.jpg'
import cover3 from '../assets/movie3.jpg'


export interface Movie {
  title?: string;
  name?:string;
  poster_path?: string;
  vote_average?: number;
  movie_id?:string;
  tv_id?:string;
}

const mockData: Movie[] =[
  {

    title: 'Hosmi espaço',
    poster_path: cover1,
    vote_average: 8,
  },
  {
    title: 'Hosmi espaço',
    poster_path: cover2,
    vote_average: 6,
  },
  {
    title: 'Hosmi espaço',
    poster_path: cover3,
    vote_average: 5,
  },
  {
    title: 'Hosmi espaço',
    poster_path: cover3,
    vote_average: 1,
  },
  {
    title: 'Hosmi espaço',
    poster_path: cover3,
    vote_average: 2,
  },
  {
    title: 'Hosmi espaço',
    poster_path: cover3,
    vote_average: 8,
  },
  {
    title: 'Hosmi espaço',
    poster_path: cover3,
    vote_average: 10,
  },
  {
    title: 'Hosmi espaço',
    poster_path: cover3,
    vote_average: 7,
  },
  {
    title: 'Hosmi espaço',
    poster_path: cover3,
    vote_average: 3,
  },
 
]

export default mockData;