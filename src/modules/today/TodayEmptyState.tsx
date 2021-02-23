import routes from "config/routes";
import Button, { StyledButton } from "modules/common/Button";
import React from "react";
import { BiPlus, BiRefresh } from "react-icons/bi";
import styled, { useTheme } from "styled-components";

const EmptyStateContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.color.backgroundAlt};
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const ButtonContainer = styled.div`
  display: flex;

  ${StyledButton} {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    ${StyledButton} {
      margin-bottom: 1rem;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

interface TodayEmptyStateProps {
  showRefresh?: boolean;
}

const TodayEmptyState: React.FC<TodayEmptyStateProps> = ({ showRefresh }) => {
  const theme = useTheme();
  const reload = () => {
    window.location.reload();
  };

  return (
    <EmptyStateContainer>
      <div style={{ marginBottom: theme.spacing[4] }}>
        You don't have any habits for today.
      </div>
      <ButtonContainer>
        <Button
          size="md"
          as="a"
          href={routes.habits.path}
          style={{ marginRight: theme.spacing[4] }}
        >
          <BiPlus style={{ marginRight: theme.spacing[2] }} size="1.25rem" />
          Add Habits
        </Button>
        {showRefresh && (
          <Button size="md" onClick={reload}>
            <BiRefresh
              style={{ marginRight: theme.spacing[2] }}
              size="1.25rem"
            />
            Use Existing Habits
          </Button>
        )}
      </ButtonContainer>
    </EmptyStateContainer>
  );
};

export default TodayEmptyState;
