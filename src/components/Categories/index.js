import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Footer from '../Footer';
import logo from '../../rolling.gif'
import '../../style.css';

class Categories extends React.Component {
  componentDidMount() {    
    this.makeHttpRequestWithPage(1); 
  }

  makeHttpRequestWithPage(pageNumber){
    const { onLoad } = this.props;
    const { per_page } = this.props;
    const { upDatepage } = this.props;
    upDatepage(pageNumber)
    axios(`http://chatproduct.tk/wordpress/index.php/wp-json/wp/v2/categories/?page=${pageNumber}&per_page=${per_page}`)
    .then((res) => onLoad(res));
  }
  

  render() {
    let renderPageNumbers;    
    const { categories } = this.props;
    const { total } = this.props;
    const { per_page } = this.props;
    const { current_page } = this.props;
    const { loading } = this.props;
    const pageNumbers = [];
    if (total !== null) {
      for (let i = 1; i <= Math.ceil(total / per_page); i++) {
        pageNumbers.push(i);
      }
      
      renderPageNumbers = pageNumbers.map(number => {
        let classes = current_page === number ? "active" : '';
        return (
          <span key={number} className={classes} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
        );
      });
    }  

    let pagination = <div className="pagination categ">
                        <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
                        {renderPageNumbers}
                        <span onClick={() => this.makeHttpRequestWithPage(4)}>&raquo;</span>
                    </div>  
    var blogs;
    
    if(loading){
       blogs = <div className = "loading"><img src={logo} className = "loadingimage" alt="logo"/></div>
    }else{
       blogs =<div><div className="container">
      <div className="row pt-8">
        <div className="col-lg-10 offset-lg-1">
            {
            categories.map((category) => {
                return (
                    <div className="card my-3" key = {category['id']}>
                    <div className="card-header">
                        {category['name']}
                    </div>
                    </div>
                )
                })
            }            
        </div>
        {pagination}
      </div>      
    </div>
    <Footer/>
   </div> 
    }

    return (
      <React.Fragment>
            {blogs}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  total: state.category.total,
  per_page: state.category.per_page,
  current_page: state.category.current_page,
  loading:state.category.loading
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'CATEGORY_PAGE_LOADED', data }),
  upDatepage: data => dispatch({ type: 'UPDATE_PAGE_LINK', data }),
  sendpost : (id,excerpt,content) => dispatch({type: 'GO_TO_POST',data:{
    id,excerpt,content
  }}) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);