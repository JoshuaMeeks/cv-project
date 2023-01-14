import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { CVProfile } from "./components/CVProfile";


function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Form 
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          address={address}
          setAddress={setAddress}
          number={number}
          setNumber={setNumber}
          email={email}
          setEmail={setEmail}
        />
        <CVProfile 
          firstName={firstName}
          lastName={lastName}
          address={address}
          number={number}
          email={email}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
