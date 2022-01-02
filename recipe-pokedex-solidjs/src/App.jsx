import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Pokedex Recipe

        </p>
        <a
          class={styles.link}
          href="https://github.com/arunabhdas/recipebook/tree/main/recipe-pokedex-solidjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokedex SolidJS Recipe
        </a>
      </header>
    </div>
  );
}

export default App;
