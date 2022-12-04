const NavbarOptions = () => {
  const navbarOptions = ['About', 'Tracks', 'Calendar', 'FAQs', 'Sponsors'];
  return (
    <>
      {navbarOptions.map((option) => (
        <a href={`#${option.toLowerCase()}`} key={option} className="hover:underline">
          {option}
        </a>
      ))}
    </>
  );
};

export default NavbarOptions;
