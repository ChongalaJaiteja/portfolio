import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./styledComponent";

const AccordionComponent = ({ children, data = [], heading }) => {
    const animateAccordionItems = {
        initial: { opacity: 0, x: 15 },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.25 * index,
                type: "spring",
            },
        }),
    };
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
                        {data.map((technologies, index) => (
                            <StyledComponent.TechnologyItem
                                key={uuidv4()}
                                variants={animateAccordionItems}
                                initial="initial"
                                whileInView="animate"
                                custom={index}
                            >
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
