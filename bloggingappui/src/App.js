import SignInPage from './pages/signin.page';
import SignUpPage from './pages/signup.page';
import ProfilePage from './pages/profile.page';
import BlogDetailPage from './pages/blog.details.page';
import BlogListPage from './pages/bloglist.page';
import CreateBlogPage from './pages/blog.create.page';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';

function App() {
  return <div className="container">

<h1 className="header">Blog Manager</h1>



<BrowserRouter>
<Routes>
<Route path="signin" element={    <SignInPage/>}/>
<Route path="signup" element={    <SignUpPage/>}/>
<Route path="profile" element={    <ProfilePage/>}/>
<Route path="blog-details" element={    <BlogDetailPage/>}/>
<Route path="blog-list" element={    <BlogListPage/>}/>
<Route path="blog-create" element={     <CreateBlogPage/>
  }/>
</Routes>
</BrowserRouter>
     
</div>
}

export default App;
