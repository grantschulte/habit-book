import styled from "styled-components";
import { Link } from "Router";

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${(props) => props.theme.font.display};
  color: var(--primary-color);
  text-decoration: none;
`;

export default Logo;
