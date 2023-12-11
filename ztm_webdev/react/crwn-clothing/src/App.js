import { Routes, Route } from 'react-router';

import './categories.styles.scss';
import Home from './routes/home/home.component';
import Nav from './routes/navigation/navigation.component'


const Shop = () => {
  return (
    <div>I'm the shop page</div>
  )

}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
       <Route index element={<Home/>}/>
       <Route path='/shop' element={<Shop/>}/>
      </Route>
    </Routes>
  )
}

export default App;
