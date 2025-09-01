import './Colorizer.css';
import { useState } from 'react';

const Colorizer = () => {
    const [color, setColor] = useState('yellow');
    const changColor = () => {
        const random = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setColor(random);

    }
    return (
        <div className='parent'>
            <h1>Colorize Using useState Hook</h1>
            <div className="content" style={{ backgroundColor: color }}>{color}</div>
            <button onClick={changColor}>Click to Change Color</button>
        </div>
    )
};

export default Colorizer;