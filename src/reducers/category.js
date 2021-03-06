export default (state={categories: [], total: null, current_page: 1,per_page: 5,loading:true}, action) => {
    switch(action.type) {    
      case 'CATEGORY_PAGE_LOADED':
        return {
          ...state,
          categories: action.data.data,
          total:action['data']['headers']['x-wp-total'],
          per_page: 5,
          loading:false
        };
      case 'SUBMIT_ARTICLE':
        return {
          ...state,
          articles: ([action.data.article]).concat(state.articles),
        };
      case 'DELETE_ARTICLE':
        return {
          ...state,
          articles: state.articles.filter((article) => article._id !== action.id),
        };
      case 'SET_EDIT':
        return {
          ...state,
          articleToEdit: action.article,
        };
      case 'EDIT_ARTICLE':
        return {
          ...state,
          articles: state.articles.map((article) => {
            if(article._id === action.data.article._id) {
              return {
                ...action.data.article,
              }
            }
            return article;
          }),
          articleToEdit: undefined,
        };
        case 'UPDATE_PAGE_LINK':
        return {
          ...state,
          current_page:action.data
        };
        case 'GO_TO_POST':
        return {
          // ...state,
          excerpt:action.data.excerpt,
          content:action.data.content,
        }
      default:
        return state;
    }
  };
  