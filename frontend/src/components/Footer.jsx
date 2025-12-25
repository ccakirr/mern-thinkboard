import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex items-center justify-center text-center mx-auto max-w-7xl min-h-20">
      <span>
        Made by ccakirr |{" "}
        <Link
          to={"https://github.com/ccakirr"}
          target="_blank"
          className="text-primary hover:text-secondary"
        >
          View on GitHub
        </Link>{" "}
        | © 2025
      </span>
    </div>
  );
};

export default Footer;
