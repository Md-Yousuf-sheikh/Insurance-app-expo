import { COLORS, TYPOGRAPHY } from "../../themes/themes";

const BASE = {
  fontFamily: TYPOGRAPHY.primary,
  fontSize: 13,
  color: COLORS.gray800,
  lingHeight: 21,
};
const BASE_BOLD = {
  fontFamily: TYPOGRAPHY.primaryBold,
  fontSize: 19,
  lingHeight: 21,
  color: COLORS.gray800,
};
const BOLD = {
  fontFamily: TYPOGRAPHY.bold,
  fontSize: 13,
  color: COLORS.gray800,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 30,
    lingHeight: 35,
  },
  h2: {
    ...BOLD,
    fontSize: 18,
    lingHeight: 21,
  },
  h3: {
    ...BOLD,
    fontSize: 16,
    lingHeight: 18,
    color: COLORS.gray700,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 15,
    lingHeight: 17.5,
  },
  h5: {
    ...BASE,
    fontSize: 14,
    lingHeight: 15.5,
  },
  h6: {
    ...BASE,
    fontSize: 12,
    lingHeight: 14,
    color: COLORS.gray400,
  },
  small: {
    ...BASE,
    fontSize: 11,
    lingHeight: 13,
  },
};
