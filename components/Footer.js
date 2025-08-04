const Footer = () => {
  return (
    <footer className="bg-black p-4 mt-12">
      <div className="container mx-auto text-center text-gray-400">
        <p>Path of the Ninja - A Fan Project for Educational Purposes</p>
        <p>© {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;