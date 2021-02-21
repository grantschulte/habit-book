import dayjs from "dayjs";
import Heading from "modules/common/Heading";
import React from "react";
import { BiRefresh } from "react-icons/bi";
import styled from "styled-components";

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const RefreshIcon = styled(BiRefresh).attrs({
  size: "2rem",
})`
  margin-left: 0.5rem;
  transition: transform 200ms ease;
  color: ${(props) => props.theme.color.secondary};

  &:hover {
    transform: rotate(180deg);
  }
`;

interface TodayHeadingProps {
  showRefresh?: boolean;
}

const TodayHeading: React.FC<TodayHeadingProps> = ({ showRefresh }) => {
  const date = dayjs();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <HeadingContainer>
      <Heading as="h1" styleAs="h2" noMargin>
        {date.format("dddd, MMMM D")}
      </Heading>
      {showRefresh && <RefreshIcon onClick={handleRefresh} />}
    </HeadingContainer>
  );
};

export default TodayHeading;
