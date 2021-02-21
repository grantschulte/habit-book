import { BiLoaderAlt } from "react-icons/bi";
import styled from "styled-components";

const LoadingIcon = styled(BiLoaderAlt).attrs((props) => ({
  color: "inherit",
}))`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  animation: spin 600ms linear infinite;
`;

export default LoadingIcon;
