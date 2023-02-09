import Link from 'next/link';

const Footer = () => {
  return (
    <div id="footer" className="flex flex-col items-center py-4 space-y-4">
      <span>© WaffleHacks 2023</span>
      <div className="flex flex-row gap-4 flex-wrap px-8 justify-around">
        <Link href="/">Home</Link>
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
      <div className="text-gray-800">
        <p>Fiscally sponsored by The Hack Foundation</p>
        <p>Non-profit EIN: 81-2908499</p>
      </div>
    </div>
  );
};

export default Footer;
