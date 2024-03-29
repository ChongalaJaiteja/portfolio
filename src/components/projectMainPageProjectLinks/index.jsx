import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";

const ProjectMainPageProjectLinks = ({ projectLinks }) => {
    return (
        <StyledComponent.ProjectLinksAndResourcesBgContainer>
            <StyledComponent.ProjectLinksAndResourcesMainHeading>
                Project Links & Resources
            </StyledComponent.ProjectLinksAndResourcesMainHeading>
            <StyledComponent.ProjectLinksItemBgContainer>
                {projectLinks.map(({ name, link, icon }) => (
                    <StyledComponent.ProjectLinkItemContainer key={uuidv4()}>
                        <StyledComponent.ProjectLinkItem
                            href={link}
                            target="_blank"
                        >
                            {icon && (
                                <StyledComponent.ProjectLinkItemIcon>
                                    {icon}
                                </StyledComponent.ProjectLinkItemIcon>
                            )}
                            <StyledComponent.ProjectLinkItemText>
                                {name}
                            </StyledComponent.ProjectLinkItemText>
                        </StyledComponent.ProjectLinkItem>
                    </StyledComponent.ProjectLinkItemContainer>
                ))}
            </StyledComponent.ProjectLinksItemBgContainer>
        </StyledComponent.ProjectLinksAndResourcesBgContainer>
    );
};

export default ProjectMainPageProjectLinks;
