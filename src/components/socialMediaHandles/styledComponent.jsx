import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactLinksListContainer = styled(motion.ul)`
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 1.5em;
    flex-flow: row wrap;
    margin-top: 1em;
`;
