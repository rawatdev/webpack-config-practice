import Recipes from "./Recipes"
import "../styles/index.scss"
import sword from "../images/swc-sword.png"
import swordSvg from "../images/sword.svg"

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={sword} alt="sword" width="250px" />
        <img src={swordSvg} alt="sword" width="250px" />
      </main>

      <Recipes />
    </>
  )
}

export default App
