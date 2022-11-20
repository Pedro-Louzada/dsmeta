import { Fragment } from "react";
import Cabecalho from "./componentes/NotificationButton/Cabecalho";
import Card from "./componentes/NotificationButton/Card";


const App = () => {

  return (
    <Fragment>
      <Cabecalho />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Card />
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default App;
