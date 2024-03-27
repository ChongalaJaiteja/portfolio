import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { development, programming } from "../../utils/constants";
import * as StyledComponent from "./styledComponent";

const ProjectMainPage = () => {
    const location = useLocation();
    const params = useParams();
    const [projectDetails, setProjectDetails] = useState(null);
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
                    <h1>LOading</h1>
                ) : (
                    <StyledComponent.ProjectMainPagContentBgContainer>
                        <h1>{projectDetails.name}</h1>
                    </StyledComponent.ProjectMainPagContentBgContainer>
                )}
            </StyledComponent.ProjectMainPageBodyContainer>
        </StyledComponent.ProjectMainPageBgContainer>
    );
};

export default ProjectMainPage;
