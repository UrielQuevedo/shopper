import { Box } from "@mui/material";
import Styles from "./_style.module.scss";

const PLACEHOLDER = "Buscar por nombre"

interface InputSearchProp {
  handleSearch: (newSearch: string) => void;
}

const InputSearch = ({
  handleSearch
}: InputSearchProp) => {

  const onChange = (event: any) => {
    const { value } = event.target;
    handleSearch(value);
  };

  return (
   <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <input onChange={onChange} className={Styles.search} placeholder={PLACEHOLDER} type="text" />
    </Box>
  );
};

export default InputSearch;
