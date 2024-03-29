import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./styledComponent";

const AccordionComponent = ({ data = [] }) => {
    return (
        <StyledComponent.AccordionBgContainer>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <StyledComponent.TechnologiesBgContainer>
                    {data.map((technologies) => (
                        <StyledComponent.TechnologyItem key={uuidv4()}>
                            {technologies}
                        </StyledComponent.TechnologyItem>
                    ))}
                </StyledComponent.TechnologiesBgContainer>
            </AccordionDetails>
        </StyledComponent.AccordionBgContainer>
    );
};

export default AccordionComponent;
