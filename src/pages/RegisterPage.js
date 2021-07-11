import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

import BackgroundCircles from '../components/BackgroundCircles';
import RegisterForm from '../components/RegisterForm';
import Spinner from '../components/Spinner';

const RegisterPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <BackgroundCircles>
      {isLoading ? <Spinner /> : <RegisterForm />}
    </BackgroundCircles>
  );
};

export default RegisterPage;
