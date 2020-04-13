import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      console.log('in here');
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
      break;

    default:
      return state;
  }
};
const addBlogpost = (dispatch) => {
  return async (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  };
};

const deleteBlogpost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const updateBlogpost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'update_blogpost', payload: { title, content } });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogpost, deleteBlogpost, updateBlogpost },
  [{ title: 'Test', content: 'asas', id: 1 }]
);
