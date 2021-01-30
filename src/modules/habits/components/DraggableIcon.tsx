import { BiGridVertical } from "modules/common/Icons";
import styled from "styled-components";

const DraggableIcon = styled(BiGridVertical).attrs((props) => ({
  size: "1.5rem",
  color: props.theme.color.grey["400"],
}))``;

export default DraggableIcon;
