import styled from "styled-components";
import Heading from "modules/common/Heading";

const StyleguideHeading = styled(Heading)`
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.color.black};
`;

export default StyleguideHeading;
