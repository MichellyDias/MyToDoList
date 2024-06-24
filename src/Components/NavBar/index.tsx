import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <img className="toDoImage" src="assets/images/to-do-list.png" />
      <h1>
        <Link to="/"> My To-Do List</Link>
      </h1>
      <div className="links">
        <Link to="/create">Criar Tarefa</Link>
        <a href="">Repositório</a>
      </div>
    </nav>
  );
}

export default NavBar;
