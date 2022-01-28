import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello, My name is Zain Sadaqat and I'm a Full Stack Web Development
        Student at Microverse. My Stack: JavaScript, React, Redux, NextJS
      </SectionText>
      <Button
        onClick={() => (window.location = 'https://www.github.com/zainsadaqat')}
      >
        Learn More!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
