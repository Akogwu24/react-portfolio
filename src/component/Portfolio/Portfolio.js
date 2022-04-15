import React from 'react';
import './Portfolio.css';
import Card from './Card';
import Portfolio_data from './Portfolio_data';
import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';

const Portfolio = () => {
  return (
    <>
      <Stack as="section" py="5" className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            <Text as="h4" fontSize="2rem">
              Some Personal Projects
            </Text>
          </div>

          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
            ]}
            className="content grid"
          >
            {Portfolio_data.map((value, index) => {
              return (
                <GridItem key={index}>
                  <Card {...value} />;
                </GridItem>
              );
            })}
          </Grid>
        </div>
      </Stack>
    </>
  );
};

export default Portfolio;
