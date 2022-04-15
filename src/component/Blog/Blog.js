import React from 'react';
import '../Portfolio/Portfolio.css';
import '../Blog/Blog.css';
import Card from './Card';
import BlogApi from './BlogApi';
import { Grid, GridItem } from '@chakra-ui/react';

const Blog = () => {
  return (
    <>
      <section className="Portfolio Blog" id="blog">
        <div className="container top">
          <div className="heading text-center">
            <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>
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
            {BlogApi.map((value, index) => {
              return (
                <GridItem key={index}>
                  <Card {...value} />
                </GridItem>
              );
            })}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Blog;
