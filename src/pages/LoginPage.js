import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

import BackgroundCircles from '../components/BackgroundCircles';
import LoginForm from '../components/LoginForm';
import Spinner from '../components/Spinner';

const LoginPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <BackgroundCircles>
      {isLoading ? <Spinner /> : <LoginForm />}
    </BackgroundCircles>
  );
};

export default LoginPage;
