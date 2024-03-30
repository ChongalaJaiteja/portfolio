import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { development, programming } from "../../utils/constants";
import Loader from "../loader";
import ProjectMainPagProjectDetails from "../projectMainPageProjectDetails";
import ProjectMainPageProjectPosts from "../projectMainPageProjectPosts";
import { v4 as uuidv4 } from "uuid";

import * as StyledComponent from "./styledComponent";

const ProjectMainPage = () => {
    const location = useLocation();
    const params = useParams();
    const [projectDetails, setProjectDetails] = useState(null);
    const { postUrl, ...rest } = projectDetails || {};

    const [isLoading, setIsLoading] = useState(true);

    const getProjectDetails = () => {
        const categoryId = params.id;
        const projectParams = params["*"].split("/");
        const projectCategory =
            projectParams.length > 1 ? projectParams[0] : undefined;
        const projectCategoryId =
            projectParams.length > 1
                ? parseInt(projectParams[1])
                : parseInt(projectParams[0]);

        const pathSegments = location.pathname.split("/");
        const skillAndProjectSectionCategory = pathSegments[2];
        let data = null;
        if (skillAndProjectSectionCategory === "development") {
            data = development.find(
                (developmentItem) =>
                    developmentItem.id.toLowerCase() ===
                    categoryId.toLowerCase()
            );
        } else if (skillAndProjectSectionCategory === "programming") {
            // data = development.find(
            //     (developmentItem) =>
            //         developmentItem.id.toLowerCase() ===
            //         categoryId.toLowerCase();
            // );
        }

        if (data) {
            const projectItem = data.sectionDetails.projects.find(
                (item) =>
                    (!projectCategory && !item?.category) ||
                    (projectCategory &&
                        item?.category?.toLowerCase() ===
                            projectCategory.toLowerCase())
            );

            const selectedProject =
                projectItem.projectList[projectCategoryId - 1];
            setProjectDetails(selectedProject.projectDetails);
        }
    };
    useEffect(() => {
        getProjectDetails();
        setIsLoading(false);
    }, []);

    return (
            <StyledComponent.ProjectMainPageBgContainer>
                <StyledComponent.ProjectMainPageBodyContainer>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <StyledComponent.ProjectMainPagContentBgContainer>
                            <StyledComponent.ProjectBgContainer>
                                <ProjectMainPagProjectDetails
                                    projectDetails={rest}
                                />
                                <ProjectMainPageProjectPosts
                                    postUrl={postUrl}
                                    image={rest.image}
                                    name={rest.name}
                                />
                            </StyledComponent.ProjectBgContainer>
                        </StyledComponent.ProjectMainPagContentBgContainer>
                    )}
                </StyledComponent.ProjectMainPageBodyContainer>
            </StyledComponent.ProjectMainPageBgContainer>
    );
};

export default ProjectMainPage;
