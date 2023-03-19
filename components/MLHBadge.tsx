import Image from 'next/image';

export default function MLHBadge() {
  // ideally we would change 3.25rem to a tailwind default but that would require
  // changing the Navbar code a bit
  return (
    <a
      className="block min-w-[60px] maxw-full w-[10%] fixed top-[3.25rem] right-[50px] z-10 md:top-14"
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
        alt="Major League Hacking 2023 Hackathon Season"
        className="w-full"
        width={153}
        height={270}
      />
    </a>
  );
}
