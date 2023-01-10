import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Raul Neto"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore est delectus facere accusamus, similique reprehenderit quis, nemo maxime deserunt pariatur, eius quod excepturi nam cum mollitia doloribus ipsa illo!"
          />
        </main>
      </div>
    </div>

  )
}

