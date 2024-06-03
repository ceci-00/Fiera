import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {
                isOpen ? (
                    <nav>
                        <i className="fa-solid fa-x"></i>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About Me</Link>
                            </li>
                            <li>
                                <Link to='/portfolio'>Portfolio</Link>
                            </li>
                            <li>
                                <Link to='/resume'>Resume</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul >
                    </nav >) : (<div className="app-bar"><p>Ceci</p><i className="fa-solid fa-bars" onClick={handleOpen}></i></div>)
            }
        </>
    );
};