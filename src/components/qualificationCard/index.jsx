/* eslint-disable react/prop-types */
import "react-vertical-timeline-component/style.min.css";
import * as StyledComponent from "./styledComponent";

const QualificationSectionCard = ({ qualification }) => {
    const {
        date,
        title,
        subtitle,
        score = "",
        content,
        icon,
        imageUrl,
        infoIcon,
        websiteUrl,
    } = qualification;
    return (
        <StyledComponent.QualificationVerticalTimelineElementContainer
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
        </StyledComponent.QualificationVerticalTimelineElementContainer>
    );
};

export default QualificationSectionCard;
