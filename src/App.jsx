import { Post } from './Post'

import './global.css'
import { Header } from './components/Header/Header.jsx'

export function App() {

  return (
    <>
      <Header />

      <Post 
        author="Raul Neto" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ducimus, nulla repellat voluptas adipisci itaque aspernatur delectus rem eum quae cupiditate autem corporis non suscipit possimus modi eligendi praesentium voluptatem."
      />
    </>
  )
}