import styled from "styled-components";
import { BiGridVertical } from "lib/Icons";

const DraggableIcon = styled(BiGridVertical).attrs((props) => ({
  size: "1.5rem",
  color: props.theme.color.primary,
}))`
  margin-right: 0.5rem;
`;

export default DraggableIcon;
