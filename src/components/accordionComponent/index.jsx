import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./styledComponent";

const AccordionComponent = ({ children, data = [], heading }) => {
    return (
        <StyledComponent.AccordionBgContainer>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{ textTransform: "capitalize" }}>
                    {heading}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {data.length > 0 ? (
                    <StyledComponent.TechnologiesBgContainer>
                        {data.map((technologies) => (
                            <StyledComponent.TechnologyItem key={uuidv4()}>
                                {technologies}
                            </StyledComponent.TechnologyItem>
                        ))}
                    </StyledComponent.TechnologiesBgContainer>
                ) : (
                    <>{children}</>
                )}
            </AccordionDetails>
        </StyledComponent.AccordionBgContainer>
    );
};

export default AccordionComponent;
