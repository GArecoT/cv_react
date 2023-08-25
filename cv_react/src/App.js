import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow m-5 h-32 card bg-base place-items-center">
            <div className="avatar mx-10">
              <div className="w-2/6 m-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="avatar.jpg" />
              </div>
            </div>
          </div>
          <div className="grid flex-grow m-5 h-32 card bg-base place-items-center">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
