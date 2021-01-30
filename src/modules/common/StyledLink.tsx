import styled from "styled-components";
import { Link } from "Router";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.primary};
`;

export default StyledLink;
