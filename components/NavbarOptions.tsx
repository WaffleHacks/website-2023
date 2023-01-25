import Link from 'next/link';

const NavbarOptions = () => {
  const navbarOptions = ['About', 'Tracks', 'Calendar', 'FAQs', 'Sponsors'];
  return (
    <>
      {navbarOptions.map((option) => (
        <Link href={`/#${option.toLowerCase()}`} key={option} className="hover:underline">
          {option}
        </Link>
      ))}
    </>
  );
};

export default NavbarOptions;
