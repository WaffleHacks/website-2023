const Footer = () => {
  return (
    <div id="footer" className="flex flex-col items-center py-4">
      <span className="mb-4">© WaffleHacks 2023</span>
      <div className="flex flex-row gap-4">
        <a target="_blank" href="/privacy">
          Privacy Policy
        </a>
        <a target="_blank" href="/rules">
          Rules
        </a>
        <a target="_blank" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" rel="noreferrer">
          MLH Code of Conduct
        </a>
      </div>
    </div>
  );
};

export default Footer;
