import './App.css';
import Applayout from './layout/Applayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncPosts } from './features/Slice/PostSlice';
import { fetchAsyncVideos } from './features/Slice/VideoSlice';
function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchAsyncPosts());
      dispatch(fetchAsyncVideos());
   }, []);
   return (
      <>
         <Applayout />
      </>
   );
}

export default App;
