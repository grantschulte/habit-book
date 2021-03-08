import styled from "styled-components";
import { Link } from "lib/Router";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.secondary};
  font-family: var(--font-family);

  &:visited {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export default StyledLink;
