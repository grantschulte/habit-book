import { setFontStack } from "app/App.slice";
import { LOCAL_STORAGE_FONT_STACK } from "config/constants";
import content from "config/content.json";
import * as localStorage from "local-storage";
import Label from "modules/common/Form/Label";
import FontItem from "modules/settings/FontSelector/FontItem";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-styled-flexboxgrid";
import { useTheme } from "styled-components";

export type FontStack = "mono" | "sans" | "serif";

const fontStacks: FontStack[] = ["mono", "sans", "serif"];

const FontSelector = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const setCSSVars = useCallback(
    (fontStack: FontStack) => {
      const root = document.documentElement;
      root.style.setProperty(
        "--font-family",
        theme.font[fontStack as keyof typeof theme.font]
      );
    },
    [theme]
  );

  useEffect(() => {
    const fontStackFromStorage: FontStack = localStorage.get(
      LOCAL_STORAGE_FONT_STACK
    );
    if (fontStackFromStorage) {
      setCSSVars(fontStackFromStorage);
      dispatch(setFontStack({ fontStack: fontStackFromStorage }));
    }
  }, [dispatch, setCSSVars]);

  const onUpdate = useCallback(
    (fontStack: FontStack) => {
      setCSSVars(fontStack);
      localStorage.set(LOCAL_STORAGE_FONT_STACK, fontStack);
      dispatch(setFontStack({ fontStack }));
    },
    [dispatch, setCSSVars]
  );

  return (
    <Row
      style={{
        marginBottom: theme.spacing[6],
      }}
    >
      <Col xs>
        <Label value={content.font} />
        <Row>
          {fontStacks.map((font) => (
            <Col xs={12} key={font}>
              <FontItem fontStack={font} onUpdate={onUpdate} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default FontSelector;
