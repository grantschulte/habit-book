import { RootState } from "app/rootReducer";
import allThemes from "config/theme";
import { Col, Row } from "lib/Grid";
import Label from "modules/common/Form/Label";
import ThemePreview from "modules/settings/ThemeSelector/ThemePreview";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { setThemeInStorage } from "./ThemeSelector.slice";

interface IThemeSelectorProps {}

const ThemeSelector: React.FC<IThemeSelectorProps> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: RootState) => state.themes);

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
                  onClick={() => dispatch(setThemeInStorage(t.name))}
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
