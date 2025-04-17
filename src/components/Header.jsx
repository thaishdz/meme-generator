
import trollface from '../assets/images/troll-face.png';

function Header() {
  return (
    <header className="header">
      <img src={trollface} alt="Troll Face Logo" />
      <h1>Meme Generator</h1>
    </header>
  );
}


export default Header;