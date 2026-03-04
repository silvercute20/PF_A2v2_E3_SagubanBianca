function MovieCrad({ title, year, director, genre, imageUrl }) {
    return(
        <div className="movie-card" style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px",
            width: "250px"
        }}>
            {imageUrl && (
                <img
                src={imageUrl}
                alt={title}
                style={{ width: "100%", borderRadius: "6px" }}
                />
            )} 

            <h3>{tiitle}</h3>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Director:</strong> {director}</p>
            <p><strong>Genre:</strong> {genre}</p>

        </div>
    );
}

export default MovieCard;