import { Grid } from '@chakra-ui/react';
import React from 'react';
import TestimonialCard from './TestimonialCard';

function TestimonialCardList({ testimonials }) {
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', , 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gap={[0, , 8, 10]}
      px={['6', , '12', '32']}
      mt={['12', '16']}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard {...testimonial} key={index} />
      ))}
    </Grid>
  );
}

export default TestimonialCardList;
