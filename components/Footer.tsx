import Link from 'next/link';

const Footer = () => {
  return (
    <div id="footer" className="flex flex-col items-center py-4">
      <span className="mb-4">© WaffleHacks 2023</span>
      <div className="flex flex-row gap-4">
        <Link href="/">Home</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/rules">Rules</Link>
        <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" rel="noreferrer">
          MLH Code of Conduct
        </Link>
      </div>
    </div>
  );
};

export default Footer;
