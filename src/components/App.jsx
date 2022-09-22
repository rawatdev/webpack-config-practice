import Recipes from "./Recipes"
import "../styles/index.scss"
import sword from "../images/swc-sword.png"
import swordSvg from "../images/sword.svg"
import Whatever from "./Whatever"

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React. How are you ? I am fine</h1>
        </section>
        <img src={sword} alt="sword" width="250px" />
        <img src={swordSvg} alt="sword" width="250px" />
        <Recipes />
        <Whatever />
      </main>
    </>
  )
}

export default App
