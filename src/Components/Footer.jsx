const Footer = () => {
    return (
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Burgers Hub. All Rights Reserved.
        </p>
        <nav className="mt-2">
          <a href="/" className="mx-2 text-yellow-500 hover:underline">Home</a>
          <a href="/menu" className="mx-2 text-blue-500 hover:underline">menu</a>
          <a href="/contact" className="mx-2 text-blue-500 hover:underline">Contact</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  