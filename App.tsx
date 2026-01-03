//import Counter from './components/Counter';
//import Modal from './components/Modal';
//import JobApplicationForm from './components/JobApplicationForm';
//import SingupWizard from './components/SingupWizard';
//import TodoApp from './components/TodoApp';
//import DataFetcher from './components/DataFetcher';
//import ShoppingCart from './components/ShoppingCart';
//import FormComponents from './components/FormComponents';
//imprt Student from './components/Student';
//import { ThemeContext } from 'styled-com
import React from "react";
 //import  LanguageContext  from './components/LanguageContext';
 //import Home from './components/Home';
 import  { CarProvider }  from '.components/CartContext';


const App:React.FC = () => {
  //const [language, setLanguage] = useState<"en"|"hi">("en");

  //const { theme, toggleTheme} = useTheme();

  return(
   
   <div >
  {/* <LanguageContext.Provider value={{ language, setLanguage}}>
     <div>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("hi")}>Hindi</button>
      <Home/>
      
     </div>
    </LanguageContext.Provider>*/}
    {/*style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff"}} >
    <h1>Current Theme: {theme}</h1>    
    <button onClick={toggleTheme}>Toggle Theme</button>
     {/* <Student /> */}
    
      {/*<FormComponents/>*/}
     {/* <ShoppingCart/>*/}
     {/* <DataFetcher/>*/}
      {/*<TodoApp/>*/}
     {/*<SingupWizard/> */}
      {/*<JobApplicationForm/>*/}
     {/* <Modal/>*/}
        {/* <Counter/> */}
    </div>
  )
}

export default App;