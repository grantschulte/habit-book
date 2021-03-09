import content from "config/content.json";
import useFontSelector from "hooks/useFontSelector";
import Label from "modules/common/Form/Label";
import FontItem from "modules/settings/FontSelector/FontItem";
import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import { useTheme } from "styled-components";

export type FontStack = "mono" | "sans" | "serif";

const fontStacks: FontStack[] = ["mono", "sans", "serif"];

const FontSelector = () => {
  const theme = useTheme();
  const { onUpdate } = useFontSelector();

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
