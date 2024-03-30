import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ModalUnstyled from "../ModalPopUp";
import ProjectDemoVideo from "../projectDemoVideo";
import * as StyledComponent from "./styledComponent";

const ProjectMainPageProjectLinks = ({ projectLinks }) => {
    const [openVideoModel, setOpenVideoModel] = useState(false);
    const [videoLink, setVideLink] = useState(null);

    const navigateToLink = (linkName, link) => {
        const isVideoBtn = linkName.toLowerCase().trim() === "watch video";
        const threshold = 768;
        if (isVideoBtn && window.innerWidth >= threshold) {
            setVideLink(link);
            setOpenVideoModel(true);
        } else {
            setOpenVideoModel(false);
            window.open(link, "_blank");
        }
    };

    return (
        <>
            <ModalUnstyled
                isOpen={openVideoModel}
                toggleModel={setOpenVideoModel}
                modelContent={<ProjectDemoVideo videoLink={videoLink} />}
            />

            <StyledComponent.ProjectLinksAndResourcesBgContainer>
                <StyledComponent.ProjectLinksAndResourcesMainHeading>
                    Project Links & Resources
                </StyledComponent.ProjectLinksAndResourcesMainHeading>
                <StyledComponent.ProjectLinksItemBgContainer>
                    {projectLinks.map(({ name, icon, link, id }) => (
                        <StyledComponent.ProjectLinkItemContainer
                            key={id}
                            onClick={() => navigateToLink(name, link)}
                        >
                            {icon && (
                                <StyledComponent.ProjectLinkItemIcon>
                                    {icon}
                                </StyledComponent.ProjectLinkItemIcon>
                            )}
                            <StyledComponent.ProjectLinkItemText>
                                {name}
                            </StyledComponent.ProjectLinkItemText>
                        </StyledComponent.ProjectLinkItemContainer>
                    ))}
                </StyledComponent.ProjectLinksItemBgContainer>
            </StyledComponent.ProjectLinksAndResourcesBgContainer>
        </>
    );
};

export default ProjectMainPageProjectLinks;
