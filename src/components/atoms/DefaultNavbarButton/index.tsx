import { CircularProgress } from "@mui/material";
import Styles from "./_style.module.scss";
import LoadingButton from "@mui/lab/LoadingButton";

interface DefaultNavbarButtonProps {
  name: string;
  isLoading: boolean;
}

const DefaultNavbarButton = ({ name, isLoading }: DefaultNavbarButtonProps) => {
  return (
    <LoadingButton
      size="small"
      type="submit"
      className={Styles.button}
      disabled={isLoading}
    >
      {isLoading ? <CircularProgress color="secondary" /> : <span>{name}</span>}
    </LoadingButton>
  );
};

export default DefaultNavbarButton;
