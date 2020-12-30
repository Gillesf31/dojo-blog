import { useState } from "react";

const Home = () => {
    const title = 'Home page';
    // let name = 'Gilles';
    const [name, setName] = useState('Gilles');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('John');
        setAge(26)
    }

    return ( 
        <div className="home">
            <h2>{ title }</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me again</button>
        </div>
     );
}
 
export default Home;