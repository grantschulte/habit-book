import { setFontStack } from "app/App.slice";
import { RootState } from "app/rootReducer";
import { FontStack } from "modules/settings/FontSelector/FontSelector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { useTheme } from "styled-components";

const StyledFontItem = styled.div<{ active?: boolean; fontStack: FontStack }>`
  background-color: ${(props) => props.theme.color.background};
  padding: 1rem;
  color: ${(props) => props.theme.color.text};
  border: 2px solid
    ${(props) =>
      props.active ? props.theme.color.secondary : props.theme.color.border};
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.font[props.fontStack]};
`;

const FontItem: React.FC<{ fontStack: FontStack }> = ({ fontStack }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const appFont = useSelector((state: RootState) => state.app.fontStack);

  const updateFontVar = (fontStack: FontStack) => {
    const root = document.documentElement;
    root.style.setProperty(
      "--font-family",
      theme.font[fontStack as keyof typeof theme.font]
    );
    dispatch(setFontStack({ fontStack }));
  };

  return (
    <StyledFontItem
      onClick={() => updateFontVar(fontStack)}
      active={appFont === fontStack}
      fontStack={fontStack}
    >
      {fontStack}
    </StyledFontItem>
  );
};

export default FontItem;
