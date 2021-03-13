import { RootState } from "app/rootReducer";
import { FontStack } from "modules/settings/FontSelector/FontSelector";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledFontItem = styled.div<{ active?: boolean; fontStack: FontStack }>`
  background-color: ${(props) => props.theme.color.background};
  padding: 1rem;
  color: ${(props) => props.theme.color.text};
  border: 2px solid
    ${(props) =>
      props.active ? props.theme.color.secondary : props.theme.color.border};
  border-radius: ${(props) => props.theme.borderRadii[4]};
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.font[props.fontStack]};
`;

const FontItem: React.FC<{
  fontStack: FontStack;
  onUpdate: (fontStack: FontStack) => void;
}> = ({ fontStack, onUpdate }) => {
  const appFont = useSelector((state: RootState) => state.app.fontStack);

  return (
    <StyledFontItem
      onClick={() => onUpdate(fontStack)}
      active={appFont === fontStack}
      fontStack={fontStack}
    >
      {fontStack}
    </StyledFontItem>
  );
};

export default FontItem;
