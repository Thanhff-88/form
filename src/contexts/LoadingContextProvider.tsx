import { Dispatch, Fragment, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from '~/components/Loader';

function LoadingContextProvider({ children }: LoadingContextProfiverProps) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <Loader />}
      <ToastContainer />
    </LoadingContext.Provider>
  );
}
const LoadingContext = createContext<LoadingContextContent>({
  loading: false,
  setLoading: () => {},
});

interface LoadingContextProfiverProps {
  children: ReactNode;
}
type LoadingContextContent = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const useLoadingContext = () => useContext(LoadingContext);
export default LoadingContextProvider;
