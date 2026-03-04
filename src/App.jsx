import MovieCard from "./components/MovieCard";

function App() {
  return(

    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        🎬 MOVIE QUICK VIEW
      </h1>


    <div style={{ 
      padding: "40px 20px",
      display:"flex",
      justifyContent:"center",
      alignItems:"flex-start",
      gap:"25px",
      flexWrap:"wrap" }}>

      <MovieCard
      title="Maid in Manhattan"
      year="2002"
      director="Wayne Wang"
      Genre="Romantic Comedy"
      imageUrl="https://i.pinimg.com/736x/9b/2e/79/9b2e79000cfebc614146e46455ab4b11.jpg"/>

      <MovieCard
      title="How to Lose a Guy in 10 Days"
      year="2003"
      director="Donald Petrie"
      Genre="Romantic Comedy"
      imageUrl="https://i.pinimg.com/736x/df/95/18/df9518b957078d098a2b36c916264934.jpg"/>

      <MovieCard
      title="Clueless"
      year="1995"
      director="Amy Heckerling"
      Genre="Romantic Comedy"
      imageUrl="https://i.pinimg.com/1200x/60/dd/37/60dd37dc77119b5812b4b2c1c5503600.jpg"/>

    </div>

    </div>
  );
}

export default App;