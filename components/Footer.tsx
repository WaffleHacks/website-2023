import Link from 'next/link';

const Footer = () => {
  return (
    <div id="footer" className="flex flex-col items-center py-4 mt-8">
      <span className="mb-4">© WaffleHacks 2023</span>
      <div className="flex flex-row gap-4 flex-wrap px-8 justify-around">
        <Link href="/privacy" target="_blank">
          Privacy Policy
        </Link>
        <Link href="/rules" target="_blank">
          Rules
        </Link>
        <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" rel="noreferrer" target="_blank">
          MLH Code of Conduct
        </Link>
      </div>
    </div>
  );
};

export default Footer;
