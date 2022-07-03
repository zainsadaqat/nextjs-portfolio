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
        I’m a software developer! I can help you build a product , feature or
        website Look through some of my work and experience! If you like what
        you see and have a project you need coded, don’t hestiate to contact me.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://docs.google.com/document/d/12BNy-qeBGheenRubu9MNh566HqLWv0EaUeLq7xcj0SA/edit?usp=sharing')
        }
      >
        Learn More!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
