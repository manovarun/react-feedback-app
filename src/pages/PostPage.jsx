import React from 'react';
import Header from '../components/Header';
import Button from '../components/shared/Button';
import {
  useParams,
  Navigate,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom';

const PostPage = () => {
  const params = useParams();

  const navigate = useNavigate();

  const handlerClick1 = () => {
    navigate('/about');
  };

  const handlerClick2 = () => {
    navigate('/post/show');
  };

  // let status = 200;

  // if (status === 404) {
  //   return <Navigate to='/notfound' />;
  // }

  return (
    <>
      <Header text='Post' />
      <p>Post ID: {params.id}</p>
      <br />
      <p>Post Name: {params.name}</p>
      <br />
      <Button type='button' version='secondary' onClick={() => handlerClick1()}>
        Navigate
      </Button>
      <div style={{ marginTop: '15px' }}></div>
      <Button type='button' version='secondary' onClick={() => handlerClick2()}>
        View Show
      </Button>

      <Routes>
        <Route path='/show' element={<h1>Hello Show Component</h1>} />
      </Routes>
    </>
  );
};

export default PostPage;
