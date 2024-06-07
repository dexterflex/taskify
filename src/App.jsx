

import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';
import Review from './components/Review';
import Faq from './components/Faq';
function App() {






  return (
    <>
      <Header />
      <Main />
      <hr className='border-1 border-gray-400  md:mx-10 mx-3 m-28 bg-white' />
      <Review />
      <hr className='border-1 border-gray-400  md:mx-10 mx-3 m-28 bg-white' />
      <Faq />
      <hr className='border-1 border-gray-400 md:mx-10 mx-3 m-28 bg-white' />
      <Footer />

    </>
  )
}
export default App
