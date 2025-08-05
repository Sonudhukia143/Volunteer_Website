import { useState } from 'react';
import './App.css';
import AdminView from './components/AdminView';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import WhoWeAre from './components/WhoWeAre';
import AdminLogin from './components/AdminLogin';
import FlashMessage from './components/Flash';

function App() {
  const [show,setShow] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [isRegister, setIsRegister] = useState(null);
  const [users,setUsers] = useState(null);
  const [message,setMessage] = useState("Welcome To Hope Rise Volunteer 🤞");
  const [type,setType] = useState("success");
  const [userRegisteredData,setUserRegisteredData] = useState(false);

  return (
    <>
      <Navbar />
      <FlashMessage setShow={setShow} show={show} message={message} type={type}/>
      <Hero setIsRegister={setIsRegister} admin={admin} setAdmin={setAdmin} userRegisteredData={userRegisteredData}/>
      <WhoWeAre />
      {
        !admin
        &&
        <>
          {
            isRegister === true && isRegister !== null
            &&
            <RegistrationForm setType={setType} setMessage={setMessage} setShow={setShow} setUserRegisteredData={setUserRegisteredData} setIsRegister={setIsRegister}/>
          }
          {
            isRegister === false && isRegister !== null
            &&
            <AdminLogin setAdmin={setAdmin} setUsers={setUsers} setType={setType} setMessage={setMessage} setShow={setShow}/>
          }

        </>
      }
      {
        admin
        &&
        <AdminView props={users}/>
      }
      <Footer />
    </>
  )
}

export default App
