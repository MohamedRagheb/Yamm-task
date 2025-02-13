import type { ImgHTMLAttributes } from "react";

type TProps = ImgHTMLAttributes<HTMLImageElement>;

function Image(props: TProps) {
  return <img {...props} loading="lazy" alt="photo" />;
}

export default Image;
