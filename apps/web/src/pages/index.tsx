import { Greeting } from 'components/Greeting/Greeting';
import React from 'react';
import { Button, Avatar, SideLayout } from '@programmerExamApp/uikit';
import styled from 'styled-components';
import { ExamCard } from '../components/ExamCard/tsx';
import { examItemEnglishData } from '../../data.test';

const StyledP = styled.p`
  font-size: 1.5rem;
  color: red;
`;

export default function Home() {
  return (
    <SideLayout>
      <ExamCard data={examItemEnglishData[0]}></ExamCard>

      <StyledP>Hello World!</StyledP>
      <Greeting />
      <Button label={'Hey!'} />
      <Avatar />
    </SideLayout>
  );
}
