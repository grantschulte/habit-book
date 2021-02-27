import routes from "config/routes";
import Button from "modules/common/Button";
import React from "react";
import { BiCheck } from "react-icons/bi";
import styled, { useTheme } from "styled-components";
import content from "config/content.json";

const StreaksContainer = styled.div`
  max-height: 300px;

  p {
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.25;
    font-size: 0.875rem;
    color: ${(props) => props.theme.color.grey[800]};
    font-style: italic;
  }
`;

const StreaksEmptyState = () => {
  const theme = useTheme();

  return (
    <StreaksContainer>
      <p>{content.streakDefinition}</p>
      <Button size="sm" as="link" href={routes.today.path} fullWidth>
        <BiCheck size="1.25rem" style={{ marginRight: theme.spacing[2] }} />
        {content.logHabit}
      </Button>
    </StreaksContainer>
  );
};

export default StreaksEmptyState;
