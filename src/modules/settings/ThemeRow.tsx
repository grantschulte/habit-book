import React from "react";
import { useTheme } from "styled-components";
import { Col, Row } from "lib/Grid";
import Label from "modules/common/Form/Label";
import allThemes from "config/theme";
import { useSetTheme } from "context/SetThemeContext";
import ThemePreview from "modules/settings/ThemePreview";

const ThemeRow = () => {
  const theme = useTheme();
  const { setTheme, themeName } = useSetTheme();

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
                  active={t.name === themeName}
                  onClick={() => setTheme(t.name)}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default ThemeRow;
