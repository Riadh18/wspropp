
import './App.css';
import Profile from './Component/Profile';

function App() {
  const Fullname ="Riadh"
  const Bio ="nothing"
  const profession ="no valid"
  const handleName=(a)=> alert(`I am ${a}`)

  return(
    <>
    <Profile Fullname={Fullname} Bio={Bio} profession={profession} handleName={handleName}>
      </Profile>
    
    </>
   
  );

}

export default App;
