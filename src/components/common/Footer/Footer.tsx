const Footer = () => {
  return (
    <footer className="container">
      <ul className="flex justify-around font-medium text-[#1d1d1b] text-sm text-center ">
        <li className="text-xl">Italian Cuisine</li>
        <li className="space-y-3">
          <p>Via Fabbian Matteo, 7</p>
          <p>Borso del Grappa (TV), Italy</p>
        </li>
        <li className="space-y-3">
          <p>Service Area</p>
          <p>info@elba-cookers.it</p>
        </li>
        <li className="space-y-3">
          <p className="underline">Company info</p>
          <p className="underline">Privacy Policy</p>
        </li>
        <li className="space-y-3">
          <p>Cookie Policy</p>
          <p className="underline">Credits</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
