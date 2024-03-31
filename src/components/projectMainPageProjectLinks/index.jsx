import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import ModalUnstyled from "../ModalPopUp";
import ProjectDemoVideo from "../projectDemoVideo";
import * as StyledComponent from "./styledComponent";

const ProjectMainPageProjectLinks = ({ projectLinks }) => {
    const [openVideoModel, setOpenVideoModel] = useState(false);
    const [videoLink, setVideoLink] = useState(null);
    const threshold = 768;

    const navigateToLink = (linkName, link) => {
        const isVideoBtn = linkName.toLowerCase().trim() === "watch video";
        if (isVideoBtn && window.innerWidth >= threshold) {
            setVideoLink(link);
            setOpenVideoModel(true);
        } else {
            setOpenVideoModel(false);
            window.open(link, "_blank");
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < threshold) {
                console.log("min");
                setOpenVideoModel(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
