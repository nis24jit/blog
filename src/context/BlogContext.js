import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog POST #${state.length + 1}` }];
    default:
      return state;
  }
};
const addBlogpost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogpost },
  []
);
