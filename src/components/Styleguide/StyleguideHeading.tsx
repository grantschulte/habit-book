import styled from "styled-components";
import Heading from "../Typography/Heading";

const StyleguideHeading = styled(Heading)`
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.color.black};
`;

export default StyleguideHeading;
