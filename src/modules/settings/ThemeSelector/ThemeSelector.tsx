import content from "config/content.json";
import allThemes from "config/theme";
import useSystemTheme from "hooks/useSystemTheme";
import useThemeSelector from "hooks/useThemeSelector";
import { Col, Row } from "lib/Grid";
import Label from "modules/common/Form/Label";
import ThemePreview from "modules/settings/ThemeSelector/ThemePreview";
import React from "react";
import { useTheme } from "styled-components";

const ThemeSelector = () => {
  const theme = useTheme();
  const { currentTheme, setTheme } = useThemeSelector();
  const systemTheme = useSystemTheme();

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
        <Label value={content.theme} />
        <Row>
          {Object.values(allThemes).map((t) => {
            return (
              <Col xs={6} key={t.name}>
                <ThemePreview
                  theme={t}
                  active={t.name === currentTheme}
                  onClick={() => handleClick(t.name)}
                />
              </Col>
            );
          })}
          <Col xs={6}>
            <ThemePreview
              theme={allThemes[systemTheme]}
              active={currentTheme === "system"}
              onClick={() => handleClick("system")}
              isSystemTheme
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ThemeSelector;
