import { ImSpinner } from 'react-icons/im';

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[99] flex justify-center items-center bg-[#6161617a]">
      <div className="animate-spin">
        <ImSpinner className="text-[50px] text-[#6a64f1]" />
      </div>
    </div>
  );
}

export default Loader;
