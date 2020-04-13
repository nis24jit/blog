import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost': {
      console.log('edit');
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
    }

    // case 'delete_blogpost':
    //   return state.filter((blog) => {
    //     return blog.id !== action.payload;
    //   });

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

const editBlogpost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogpost, deleteBlogpost, editBlogpost },
  [{ title: 'Test', content: 'asas', id: 1 }]
);
