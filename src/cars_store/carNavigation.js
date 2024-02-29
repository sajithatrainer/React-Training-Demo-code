import { Link } from "react-router-dom";

export default function CarNavigation(){
    return <div>
        <nav className="nav navbar justify-content-between">
            <Link to="/" >Home</Link>
            <Link to="/cars" >Cars</Link>
            <Link to="/cars/add" >Add</Link>

        </nav>
    </div>
}