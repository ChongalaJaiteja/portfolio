import "react-vertical-timeline-component/style.min.css";
import { qualificationData } from "../../utils/constants";
import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";
const Qualification = ({ route }) => {
    return (
        <StyledComponent.QualificationBgContainer id={route}>
            <StyledComponent.QualificationMainHeading>
                Qualification
            </StyledComponent.QualificationMainHeading>
            <StyledComponent.QualificationSectionBodyContainer>
                <StyledComponent.QualificationListContainer>
                    <StyledComponent.VerticalTimelineContainer>
                        {qualificationData.map(
                            ({
                                date,
                                title,
                                subtitle,
                                score = "",
                                content,
                                icon,
                                imageUrl,
                                infoIcon,
                                websiteUrl,
                            }) => (
                                <StyledComponent.VerticalTimelineElementContainer
                                    key={uuidv4()}
                                    className="vertical-timeline-element--work"
                                    date={date}
                                    icon={icon}
                                >
                                    <StyledComponent.QualificationCardContainer>
                                        <StyledComponent.QualificationImgContainer>
                                            <StyledComponent.QualificationCardImg
                                                src={imageUrl}
                                                alt={title}
                                            />
                                        </StyledComponent.QualificationImgContainer>

                                        <StyledComponent.QualificationCardContentContainer>
                                            <StyledComponent.QualificationCardTitle className="vertical-timeline-element-title">
                                                {title}
                                            </StyledComponent.QualificationCardTitle>
                                            <StyledComponent.QualificationCardSubTitle className="vertical-timeline-element-subtitle">
                                                <StyledComponent.LocationIcon />
                                                {subtitle}
                                            </StyledComponent.QualificationCardSubTitle>

                                            {score && (
                                                <StyledComponent.QualificationCardSubTitle>
                                                    <StyledComponent.ScoreIcon />
                                                    {score}
                                                </StyledComponent.QualificationCardSubTitle>
                                            )}
                                            <StyledComponent.QualificationCardDescription>
                                                {content}
                                                <StyledComponent.QualificationCardLink
                                                    href={websiteUrl}
                                                    alt={title}
                                                    target="_blank"
                                                >
                                                    More Info.
                                                </StyledComponent.QualificationCardLink>
                                            </StyledComponent.QualificationCardDescription>
                                        </StyledComponent.QualificationCardContentContainer>
                                    </StyledComponent.QualificationCardContainer>
                                </StyledComponent.VerticalTimelineElementContainer>
                            )
                        )}
                    </StyledComponent.VerticalTimelineContainer>
                </StyledComponent.QualificationListContainer>
            </StyledComponent.QualificationSectionBodyContainer>
        </StyledComponent.QualificationBgContainer>
    );
};

export default Qualification;
