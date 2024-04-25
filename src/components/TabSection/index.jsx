import * as StyledComponent from "./styledComponent";
import { Suspense, lazy } from "react";
import { v4 as uuidv4 } from "uuid";
import TabSectionContentList from "../tabSectionContentList";
import Loader from "../loader";

const TabSection = ({ tabSectionData, id }) => {


    return (
        <StyledComponent.TabSectionBgContainer>
            <Suspense fallback={<Loader />}>
                {tabSectionData.map((tabDataList, index) => (
                    <TabSectionContentList
                        key={uuidv4()}
                        data={tabDataList}
                        index={index}
                        id={id}
                    />
                ))}
            </Suspense>
        </StyledComponent.TabSectionBgContainer>
    );
};

export default TabSection;
