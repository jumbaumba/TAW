import { useSelector } from 'react-redux';
import { RootState } from '@shared/store';
import './HomePage.css';
export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <h1>Main Page</h1>
      {user ? (
        <p>Hi, {user.name}!</p>
      ) : (
        <p>You are not logged in!</p>
      )}
      <div className='begin'>
      <div className='main_card'>
          <h2>Hi, my name is Dmitiy and is is my project</h2>
          <h3>I hope you will enjoy it and find it interesting</h3>
          <h4>so pls send me a feedback to my <a href='https://www.instagram.com/nemorsell?igsh=MTcyZGtwNXQ0Z3Uweg=='>Instagram</a> </h4>
      </div>
    </div>
    </>
  );
};