const sizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const devices = {
  mobile: `(min-width: ${sizes.sm})`,
  tablet: `(min-width: ${sizes.md})`,
  laptop: `(min-width: ${sizes.lg})`,
  desktop: `(min-width: ${sizes.xl})`,
};

export const heights = {
  header: "108px",
  form: "64px",
  // mobileサイズのときだけユーザが上に表示されるのでそのための高さ
  username: "36px",
};
