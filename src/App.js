import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { CVProfile } from "./components/CVProfile";


function App() {
  const [firstName, setFirstName] = useState('')

  const handleChange = (e) => {
    setFirstName(e.target.value)
  }

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Form 
          firstName={firstName}
          setFirstName={setFirstName}
          handleChange={handleChange}
        />
        <CVProfile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
