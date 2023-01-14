import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { CVProfile } from "./components/CVProfile";


function App() {
  const [personal, setPersonal] = useState({
    firstName: '',
    lastName: '',
    Address: '',
    Number: '',
    Email: ''
  })

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Form />
        <CVProfile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
