import Nav from './Navbar';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <div className="container">
            <div className="left">
                <img src={props.img} />
            </div>
            <div className="right">
                <Nav />
                {props.children}
                <Footer />
            </div>
        </div>
    );
}