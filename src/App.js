import prajwal from "./assets/prajwal.jpg";
import "./App.css";
import resume from "./assets/Resume-Prajwal.pdf";

function App() {
  const changeMode = () =>{
    let element = document.body;
    element.classList.toggle("dark-mode");

    let label = document.getElementById("ld-mode");
    if (label.innerHTML === "Light Mode"){
      label.innerHTML = "Dark Mode";
    } else {
      label.innerHTML = "Light Mode";
    }

    let img = document.getElementsById("img");
    img.classList.toggle("dark-img");

  }
  return (
    <div>
      <header>
        <button id="ld-mode" className="btn" onClick={changeMode}>Dark Mode</button>
      </header>
        <section className="main-content">
          <img id='img' src={prajwal} alt="Prajwal Ale" />
          <h1>Hi, I'm Prajwal.</h1>
          <article>
          <p>
            A passionate and ambitious graduate with a Master of Information
            Technology from Charles Sturt University. I'm looking for a graduate
            software developer role. I'm a keen software developer with
            experience in HTML, CSS, Javascript (React), and python programming.
            Strong grasp of software design and development, database, cloud
            technology, computer network, and cybersecurity concepts.
          </p>
        </article>
      </section>
      <div className="solid-line"/>
      <footer>
        <ul className="nav-list">
          <li><a href="mailto:aleprajwal@gmail.com" target="_blank" rel="noopener noreferrer">aleprajwal@gmail.com</a></li>
          <li><a href="https://github.com/aleprajwal" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/aleprajwal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
