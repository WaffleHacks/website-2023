import { CSSProperties } from 'react';

interface Props {
  alt: string;
  src: string;
  mimeType?: string;
  className?: string;
  style?: CSSProperties;
}

const Image = ({ alt, className, mimeType, src, style }: Props): JSX.Element => (
  <picture className={className} style={style}>
    <source srcSet={src} type={mimeType} />
    <img src={src} alt={alt} className={className} style={style} />
  </picture>
);

export default Image;
