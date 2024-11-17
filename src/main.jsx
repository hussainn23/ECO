import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import { Blogs } from './Components/Blogs.jsx';
import { Contact } from './Components/Contact.jsx';
import { Services } from './Components/Services.jsx';
import About from './Components/About.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services/>} />
      <Route path="blogs" element={<About />} />
   
   </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
