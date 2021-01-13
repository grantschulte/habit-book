import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.primary};
`;

export default StyledLink;
