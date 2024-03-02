import { qualificationData } from "../../utils/constants";
import "react-vertical-timeline-component/style.min.css";
import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";
import QualificationSectionCard from "../qualificationCard";

const Qualification = ({ route }) => {
    return (
        <StyledComponent.QualificationBgContainer id={route}>
            <StyledComponent.QualificationMainHeading>
                Qualification
            </StyledComponent.QualificationMainHeading>
            <StyledComponent.QualificationSectionBodyContainer>
                <StyledComponent.QualificationListContainer>
                    <StyledComponent.QualificationVerticalTimelineContainer>
                        {qualificationData.map((qualification) => (
                            <QualificationSectionCard
                                key={uuidv4()}
                                qualification={qualification}
                            />
                        ))}
                    </StyledComponent.QualificationVerticalTimelineContainer>
                </StyledComponent.QualificationListContainer>
            </StyledComponent.QualificationSectionBodyContainer>
        </StyledComponent.QualificationBgContainer>
    );
};

export default Qualification;
