import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Card from "./components/Card";
import data from './data.js';

function App() {
  // const cards = data.map(item => <Card key={item.id} img={item.coverImg} rating={item.stats.rating} reviewCount={item.stats.reviewCount} location={item.location} title={item.title} price={item.price} openSpots={item.openSpots}/>)
  // const cards = data.map(item => <Card key={item.id} item={item}/>)
  const cards = data.map(item => <Card key={item.id} {...item}/>)

  return (
    <div className="App">
      <Navbar/>
      <Description/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
