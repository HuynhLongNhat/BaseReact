
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
     <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;