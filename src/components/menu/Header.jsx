import { Link } from "react-router";

export const Header = () => {
  return (
    <nav className="container mx-auto px-6 py-4 pb-10">
      <div className="flex items-center justify-between backdrop-opacity-10 border-2  p-2 rounded">
        <span className="text-2xl font-bold gradient-text">Lesya</span>
        <span className="flex md:flex items-center space-x-8">
          <ul className="flex flex-row gap-2">
            <Link to="/myWork" className="flex justify-center gap-2">
              {/* <span className="material-symbols-light--work-outline" /> */}
              My works
            </Link>
            {/* <Link to="/skills">My skills</Link> */}
            <Link to="/contact">Contanct</Link>
            <Link to="/about">About me</Link>
          </ul>
        </span>
      </div>
    </nav>
  );
};
