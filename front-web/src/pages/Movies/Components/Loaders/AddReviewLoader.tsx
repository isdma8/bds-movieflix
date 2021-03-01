import React from 'react';
import ContentLoader from 'react-content-loader';

const AddReviewLoader = () => (
  <ContentLoader 
    speed={1}
    width="100%"
    height={460}
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="10" y="0" rx="10" ry="10" width="1150" height="100" />
  </ContentLoader>
)

export default AddReviewLoader;