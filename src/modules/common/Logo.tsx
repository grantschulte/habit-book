import styled from "styled-components";
import { Link } from "lib/Router";

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: var(--font-family);
  color: var(--primary-color);
  text-decoration: none;
`;

export default Logo;
