import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Cta() {
  const { isAuthenticated } = useAuth();
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2>Every parent deserves support in the hard moments</h2>
        <p>
          PARENT-APP is being built with you in mind. Be the first to try it
          when we launch.
        </p>
        <Link to={isAuthenticated ? "/" : "/register"} className="btn-white">
          {isAuthenticated ? "Open the app →" : "Get started →"}
        </Link>
      </div>
    </section>
  );
}
