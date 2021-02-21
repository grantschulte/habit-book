import allThemes from "config/theme";
import useThemeSelector from "hooks/useThemeSelector";
import { Col, Row } from "lib/Grid";
import Label from "modules/common/Form/Label";
import ThemePreview from "modules/settings/ThemeSelector/ThemePreview";
import React from "react";
import { useTheme } from "styled-components";

interface IThemeSelectorProps {}

const ThemeSelector: React.FC<IThemeSelectorProps> = () => {
  const theme = useTheme();
  const { currentTheme, setTheme } = useThemeSelector();

  const handleClick = (themeName: string) => {
    setTheme(themeName);
  };

  return (
    <Row
      style={{
        marginBottom: theme.spacing[6],
      }}
    >
      <Col xs>
        <Label value="Theme" />
        <Row>
          {Object.values(allThemes).map((t) => {
            return (
              <Col xs key={t.name}>
                <ThemePreview
                  theme={t}
                  active={t.name === currentTheme}
                  onClick={() => handleClick(t.name)}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default ThemeSelector;
