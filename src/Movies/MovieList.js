const movieList = ({ movie }) => {
    return (
        <li className='movie' key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} width='200px' height='250px' />
            <p>Total Episodes: <span>{movie.episodes}</span></p>
            <p>Network: <span>{movie.network}</span></p>
            <ul key={movie.title}>
                <span>Catagory:</span>
                {
                    movie.catagory.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </li>
    )
};
export default movieList;