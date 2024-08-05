import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import CardPizza from './CardPizza';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <div className="card-container">
        <CardPizza
          foto="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          titulo="Napolitana"
          ingredients="mozzarella, tomates, jamón, orégano"
          valor={5950}
        />
        <CardPizza
          foto="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          titulo="Española"
          ingredients="mozzarella, gorgonzola, parmesano, provolone"
          valor={6950}
        />
        <CardPizza
          foto="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"

          titulo="Pepperoni"
          ingredients="mozzarella, peperoni, jamón, orégano"
          valor={6950}
        />
      </div>
    </div>
  );
}

export default Home;
