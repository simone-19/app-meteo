import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
const MyFooter = () => (
  <footer id="footer" className="d-flex mt-3">
    <span className="text-white m-auto p-2">
      <div className="text-center mb-3">
        <Facebook className="text-white me-3" />
        <Instagram className="text-white me-3" />
        <Twitter className="text-white me-3" />
        <Youtube className="text-white me-3" />
      </div>
      <strong>EPIMETEO</strong> - Copyright {new Date().getFullYear()}
    </span>
  </footer>
);

export default MyFooter;
