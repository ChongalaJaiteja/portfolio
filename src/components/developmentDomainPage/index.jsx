import { useParams } from "react-router-dom";
import { development, getDevelopmentPageData } from "../../utils/constants";
import * as StyledComponent from "./styledComponent";
const DevelopmentDomainPage = () => {
    const { id } = useParams();
    const { domainDetails } = getDevelopmentPageData(id);
    console.log(domainDetails);
    return <h1>{id}</h1>;
};

export default DevelopmentDomainPage;
