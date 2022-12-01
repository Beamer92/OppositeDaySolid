import type { Component } from 'solid-js';
import Map from './routes/Map';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Map />
    </div>
  );
};

export default App;
