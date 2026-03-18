import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Makepayment from './components/Makepayment';

function App() {
  return (
    <Router>
      <div className="App">
       <header className="App-header">
        <h1>Welcome To Sokogarden</h1>
       </header>
       <nav>
        <Link to="/" className='btn btn-primary btn-sm'>Home</Link>
        <Link to="/addproducts" className='btn btn-secondary btn-sm'>AddProducts</Link>
        <Link to="/signin" className='btn btn-danger btn-sm'>SignIn</Link>
        <Link to="/signup" className='btn btn-info btn-sm'>SignUp</Link>
       </nav>
       {/* Below are our different routes together with the rendered components.*/}
       <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Getproducts />}/>
        
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproducts' element={<Addproducts/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='*' element={<Notfound/>}/>
       </Routes>
      </div>
    </Router>
  );
}

export default App;
