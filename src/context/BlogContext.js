import React from 'react';
const BlogContext = React.createContext();
export const BlogProvider = ({ children }) => {
  let test = Math.random();
  return <BlogContext.Provider value={test}>{children}</BlogContext.Provider>;
};

export default BlogContext;
