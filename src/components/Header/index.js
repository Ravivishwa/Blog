import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render() { 
        const { gotohome } = this.props;
        return (
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="navbar-brand">
                        <img src="https://seofreelancermumbai.in/wp-content/uploads/2017/04/blog-post.jpg"  height="30px" alt="logo"/>
                    </div>                
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={gotohome}>
                            <Link className="nav-link" to = "/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "/categories">Categories</Link>
                        </li>
                    </ul>
                </nav> 
         );
    }
}
 
const mapStateToProps = state => ({
    articles: state.home.articles,
    total: state.home.total,
    per_page: state.home.per_page,
    current_page: state.home.current_page,
    content:state.home.content,
    loading:state.home.loading,
  });
  
  const mapDispatchToProps = dispatch => ({
    gotohome: () => dispatch({ type: 'GOTO_HOME' }),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);