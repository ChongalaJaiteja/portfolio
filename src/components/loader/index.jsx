import { TailSpin } from "react-loader-spinner";
import * as StyledComponent from "./styledComponent";

const Loader = () => {
    return (
        <StyledComponent.LoaderBgContainer>
            <TailSpin
                visible={true}
                height="90"
                width="100"
                color="rgb(46, 175, 255)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </StyledComponent.LoaderBgContainer>
    );
};

export default Loader;
