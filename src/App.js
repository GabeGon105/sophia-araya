import { Routes, Route } from "react-router-dom"
import Beauty from "./routes/Beauty"
import Fashion from "./routes/Fashion"
import Hair from "./routes/Hair"
import MaleGrooming from "./routes/MaleGrooming"
import About from "./routes/About"
import Contact from "./routes/Contact"
import ContactSuccess from "./routes/ContactSucess"
import ErrorPage from "./routes/ErrorPage"

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Routes>
        <Route path='/' element={ <Beauty/> } />
        <Route path='/beauty' element={ <Beauty/> } />
        <Route path='/fashion' element={ <Fashion/> } />
        <Route path='/hair' element={ <Hair/> } />
        <Route path='/male-grooming' element={ <MaleGrooming/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/contact-success' element={ <ContactSuccess/> } />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;