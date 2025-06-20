import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import t5 from '../assets/t5.jpg';
import t6 from '../assets/t6.jpg';
import trailer1 from '../assets/trailer1.mp4';

type MovieType = 
{
  id: number;
  url: string;
  title: string;
  year: string;
  genre: string;
  description: string;
  trailer: string;
};

const movies: MovieType[] = 
[
  { 
    id: 1, 
    url: t1, 
    title: 'The Shawshank Redemption', 
    year: '1994', 
    genre: 'Thriller/Crime', 
    description: '...', 
    trailer: trailer1 
  },
  { 
    id: 2, 
    url: t2, 
    title: 'Seven', 
    year: '1994', 
    genre: 'Thriller/Crime', 
    description: '...', 
    trailer: trailer1 
  },
  { 
    id: 3, 
    url: t3, 
    title: 'True Detective', 
    year: '1994', 
    genre: 'Thriller/Crime', 
    description: '...', 
    trailer: trailer1 
  },
  {
    id: 4, 
    url: t4, 
    title: 'Rang de Basanti', 
    year: '1994', 
    genre: 'Thriller/Crime', 
    description: '...', 
    trailer: trailer1 
  },
  { 
    id: 5, 
    url: t5, 
    title: 'Good Will Hunting', 
    year: '1994', 
    genre: 'Thriller/Crime', 
    description: '...', 
    trailer: trailer1 
  },
  {
    id: 6, 
    url: t6, 
    title: 'A Walk to Remember', 
    year: '1994', 
    genre: 'Thriller/Crime', 
    description: '...', 
    trailer: trailer1 
  },
];


function Trends() 
{

  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);
  const [hoverTrailer, setHoverTrailer] = useState(false);

  //for the scroll functionality
  const scrollRef = useRef<HTMLDivElement>(null);                     //to access the div component that has the movies
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  //to check if we can scroll right or left
  const checkScroll = () => 
  {
    const ele = scrollRef.current;

    if (ele) 
    {
      setCanScrollLeft(ele.scrollLeft > 0);
      setCanScrollRight(ele.scrollLeft + ele.clientWidth < ele.scrollWidth );
    }

  };


  const scroll = (direction: 'left' | 'right') => 
  {
    const ele = scrollRef.current;
    
    if (ele) 
    {
      const amount = 500;
      ele.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  //use effect hook -   
  useEffect(() => {
    const ele = scrollRef.current;
    if (!ele) return;
    checkScroll();

    ele.addEventListener('scroll', checkScroll);

  }, []);


  return (

    <div className="pb-10 relative">

      <div className="font-bold text-2xl mb-5 ">Trending Now</div>


      {/* left */}

      <button onClick={() => scroll('left')} className={`absolute left-0 top-0 h-full w-16 z-20 flex items-center justify-center bg-gradient-to-r from-black/80 to-transparent transition-opacity duration-300 
      ${ canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <ChevronLeft size={40} className="text-white" />
      </button>

      <div ref={scrollRef} className="scroll flex gap-10 overflow-x-auto scroll-smooth px-16 no-scrollbar">
        
        {movies.map((movie) => (
          <div onClick={() => setSelectedMovie(movie)} key={movie.id} className="pt-5 relative group cursor-pointer">
            
            <img className="rounded-2xl min-w-[200px] min-h-[300px] transition-transform duration-300 group-hover:scale-105" src={movie.url} alt="" />
            
            <div className="text-9xl font-bold absolute bottom-0 left-[-30px] text-white drop-shadow-lg"> {movie.id} </div>
          
          </div>
        ))}

      </div>


      {/* right */}
      <button onClick={() => scroll('right')} className={`absolute right-0 top-0 h-full w-16 z-20 flex items-center justify-center bg-gradient-to-l from-black/80 to-transparent transition-opacity duration-300 
      ${ canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}>
      <ChevronRight size={40} className="text-white" />
      </button>

      
      {selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50">
          
          <div className="relative bg-gray-900 rounded-2xl p-5 text-white w-[90%] max-w-[800px]">
            <button onClick={() => setSelectedMovie(null)} className="absolute top-0 right-1 text-3xl" > × </button>

            <div
              onMouseEnter={() => setHoverTrailer(true)}
              onMouseLeave={() => setHoverTrailer(false)}
              className="relative mb-4 rounded-xl overflow-hidden"
            >
              {hoverTrailer ? (
                <video src={selectedMovie.trailer} muted loop autoPlay className="w-full h-[400px] object-cover" />
              ) : (
                <img src={selectedMovie.url} alt={selectedMovie.title} className="w-full h-[400px] object-cover" />
              )}
            </div>

            <h2 className="text-3xl font-bold mb-1">{selectedMovie.title}</h2>
            <p className="text-sm text-gray-400 mb-2">
              {selectedMovie.year} • {selectedMovie.genre}
            </p>
            <p className="text-gray-200">{selectedMovie.description}</p>
          </div>

        </div>
        
      )}
    </div>
  );
}

export default Trends;
