import MovieCard from "./components/MovieCard";

function App() {
  return(
    <div style={{ padding: "20px" }}>
      <h1> 𝐌𝐎𝐕𝐈𝐄 𝐐𝐔𝐈𝐂𝐊 𝐕𝐈𝐄𝐖 🎬 </h1>

      <MovieCard
      title="Maid in Manhattan"
      year="2002"
      director="Wayne Wang"
      Genre="Romantic Comedy"
      imageUrl="https://ph.pinterest.com/pin/237987161543330343/"/>

      <MovieCard
      title="How to Lose a Guy in 10 Days"
      year="2003"
      director="Donald Petrie"
      Genre="Romantic Comedy"
      imageUrl="https://ph.pinterest.com/pin/1031113277188619991/"/>

      <MovieCard
      title="Clueless"
      year="1995"
      director="Amy Heckerling"
      Genre="Romantic Comedy"
      imageUrl="https://ph.pinterest.com/pin/626211523177392008/"/>

    </div>
  );
}

export default App;