import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Admin from './components/Admin';
import View from './components/View';
import Add from './components/Add';
import Edit from './components/Edit'
import PageNotFound from './components/PageNotFound'
import List from './components/List';

function App() {
  return (
    <div className="App">
      <section>
        <Header/>
      </section>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='list' element={<List/>}/>
        <Route path='list/view/:id' element={<View/>} />
        <Route path='add' element={<Add/>} />
          <Route path='list/edit/:id' element={<Edit/>} />
          {/* <Route path='*' element={<PageNotFound/>} /> */}
      </Routes>
    <section>
      <Footer/>
    </section>
    </div>
  );
}

export default App;
