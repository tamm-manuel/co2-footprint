import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex-1 border-t border-accent py-5 bg-primaryDark">
      <div className="flex items-center justify-between p-4 max-w-4xl mx-auto flex-wrap space-y-5 sm:space-y-0 [&>div]:mx-2">
        <div>
          <div className="text-accent">Adress:</div>
          <div>Some Street 15</div>
          <div>12345 Somecity</div>
        </div>

        <div>
          <div>© SomeCompany</div>
          <div>
            <Link to="/" className="hover:text-accent transition-colors">Legal Notice</Link>
          </div>
        </div>

        <div>
          <div className="text-accent">Contact:</div>
          <div>
            <a href="mailto:some.email@example.com" className="hover:text-accent transition-colors">some.email@example.com</a>
          </div>
          <div>
            <a href="tel:1234 56789" className="hover:text-accent transition-colors">1234 56789</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;