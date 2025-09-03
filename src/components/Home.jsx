import Header from './Header.jsx';
import CardPizza from './CardPizza.jsx';

export default function Home() {
  return (
    <main className="container my-4">
      <Header />

      <section className="d-flex flex-wrap gap-3 justify-content-center mt-4">
        <CardPizza
          name="Napolitana"
          price={5990}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />

        <CardPizza
          name="Española"
          price={6990}
          ingredients={["mozzarella", "tomates", "parmesano", "palta"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />

        <CardPizza
          name="Pepperoni"
          price={7990}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
      </section>
    </main>
  );
}
