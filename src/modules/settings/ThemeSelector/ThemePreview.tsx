import React from "react";
import styled, { DefaultTheme } from "styled-components";

const StyledThemePreview = styled.div<{
  theme: DefaultTheme;
  active?: boolean;
}>`
  background-color: ${(props) => props.theme.color.background};
  padding: 1rem;
  color: ${(props) => props.theme.color.text};
  border: 2px solid
    ${(props) =>
      props.active ? props.theme.color.secondary : props.theme.color.border};
  margin-bottom: 1rem;
`;

const ThemeBox = styled.div<{ color: string; width?: string; height?: string }>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.color};
`;

const ThemePreview = ({
  theme,
  active,
  onClick,
  isSystemTheme,
}: {
  theme: DefaultTheme;
  active: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  isSystemTheme?: boolean;
}) => {
  return (
    <StyledThemePreview theme={theme} active={active} onClick={onClick}>
      <div style={{ marginBottom: theme.spacing[2] }}>
        {isSystemTheme ? "system" : theme.name}
      </div>
      <ThemeBox
        color={theme.color.backgroundAlt}
        height="20px"
        width="100%"
        style={{ marginBottom: theme.spacing[2] }}
      />
      <div
        style={{
          display: "flex",
          gap: theme.spacing[2],
          marginBottom: theme.spacing[2],
        }}
      >
        <ThemeBox
          color={theme.color.backgroundAlt}
          height="20px"
          width="100%"
        />
        <ThemeBox
          color={theme.color.backgroundAlt}
          height="20px"
          width="100%"
        />
      </div>
    </StyledThemePreview>
  );
};

export default ThemePreview;
