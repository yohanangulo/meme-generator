import "../res/Navbar.module.css"
import logo from '../res/troll-face.png'

function Navbar() {
  return (
    <header className="text-white">
      <div className="min-h-[65px] flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="" width={32} className="mr-2"/>
          <h2 className="text-[20.75px] font-bold">Meme Generator</h2>
        </div>
        <nav>
          <p className="text-xs">Project 3</p>
        </nav>
      </div>
    </header>
  );
}

export default Navbar