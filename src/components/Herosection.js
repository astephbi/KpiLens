import React from 'react';
import img from '../assets/img/img.png';
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  HStack,
} from '@chakra-ui/react';

const Herosection = () => {
  return (
    <Box mx={20} pt={105}>
      <HStack>
        <VStack width="50%" gap={10}>
          <Heading fontSize="80"> Simplify Impact reporting</Heading>
          <Text>
            Our online dashboards enable development organisations to
            track project KPIs across multiple LogFrames in near
            real-time, helping them spend more of their time in
            communities achieving impact
          </Text>
        </VStack>

        <Image src={img} alt="HeroSection image" rotate={400} />
      </HStack>
    </Box>
  );
};

export default Herosection;
