import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { googleIcon } from '~/assets/icons';
import config from '~/configs';
import { addUser, login } from '~/services/loginService';

function Login() {
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      await login().then(async (res) => {
        await addUser(res.user);
      });
      nav(config.routes.home);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="absolute top-0 mt-[100px]">
        <p className="text-4xl sm:text-2xl xs:text-lg font-bold text-slate-600">Trang quản lý thông tin</p>
      </div>
      <button
        onClick={handleLogin}
        className="button-28 flex items-center justify-between xl:w-[30%] lg:w-[50%] xs:!w-[96%] sm:!w-[80%] sm:text-[20px] xs:text-[16px] md:w-[60%] text-[30px] md:!text-[18px] px-[30px] py-[15px] md:px-[10px] md:py-[10px] sm:px-[8px] sm:py-[7px]"
      >
        <img className="w-[13%]" src={googleIcon.icon} alt={googleIcon.alt} />
        Login With Google
        <img className="w-[13%] opacity-0" src={googleIcon.icon} alt={googleIcon.alt} />
      </button>
    </div>
  );
}

export default Login;
