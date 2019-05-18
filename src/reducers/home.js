export default (state={articles: [], total: null, current_page: 1,per_page: 5,loading:true}, action) => { 
  switch(action.type) {    
    case 'HOME_PAGE_LOADED':
      return {
        ...state,
        articles: action.data.data,
        total:action['data']['headers']['x-wp-total'],
        per_page: 5,
        loading:false
      };
    case 'GOTO_HOME':
    var tempData = {};
      for ( var index in state ) {
        if ( index !== "excerpt" ) { 
          tempData[index] = state[index]; 
        } 
      }
     state = tempData;
    return{
      ...state
    }
      case 'UPDATE_PAGE_LINK':
      return {
        ...state,
        current_page:action.data
      };
      case 'GO_TO_POST':
      var tempData = {};
        for (var index in state ) {
          if ( index !== "total" ) { 
            tempData[index] = state[index]; 
          } 
     }
     state = tempData;
      return {
        ...state,
        excerpt:action.data.excerpt,
        content:action.data.content,
      }
    default:
      return state;
  }
};
