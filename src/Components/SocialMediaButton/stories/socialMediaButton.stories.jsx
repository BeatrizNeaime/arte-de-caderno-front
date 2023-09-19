import { colors } from "src/Components/UI/contants";
import SocialMediaButton from "..";

export default {
  title: "components/social media button",
  component: SocialMediaButton,
  tags: ["autodocs"],
};

export const FACEBOOK = {
  args: {
    color: colors.facebook,
    width: "50%",
    img: "logo-facebook",
    bg: colors.facebook_hover,
  },
};

export const GMAIL = {
  args: {
    color: colors.gmail,
    width: "50%",
    img: "mail-outline",
    bg: colors.gmail_hover
  },
};
