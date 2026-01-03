import React, { useContext } from 'react';
import  LanguageContext  from "./LanguageContext";


const Home: React.FC = () => {
    const { language } = useContext(LanguageContext);

    return(
        <div>
            {language === "en" ? (
                <h1>Welcome to our App!</h1>
            ): (
                <h1>iss aap mein aapka swagat hai</h1>
            )}
        </div>
    )
}


export default Home;