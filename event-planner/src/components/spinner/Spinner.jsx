import { ColorRing } from "react-loader-spinner";
import { SpinnerStyled } from "./Spinner.styled";

const Spinner = () => {
  return (
    <SpinnerStyled>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </SpinnerStyled>
  );
};

export default Spinner;