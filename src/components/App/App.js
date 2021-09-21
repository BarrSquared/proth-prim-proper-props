import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import GuestList from '../GuestList/GuestList.js';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm.js';


function App() {
  let [guestList, setGuestList] = useState([]);
  //      ^ is our destructured prop we pass into components


  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }





  return (
    <div className="App">
      <Header />
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <GuestForm addGuest={addGuest} />
      <GuestList guestList={guestList} />
      <DinnerSupplies guestList={guestList} />
      {/*                           ^ Is the prop we pass into our component
                                It is also the variable in state, that we destructure at the top
      */}
      <Footer />
    </div>
  );
}

export default App;
