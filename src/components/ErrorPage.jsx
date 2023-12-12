import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex min-h-screen min-w-max flex-grow flex-col items-center justify-center">
      <div className="text-6xl font-bold">
        <h1>Oops</h1>
      </div>
      <div>
        <p className="m-4 text-xl text-gray-400">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="m-4 text-center text-2xl">
          {error?.status} {error?.statusText || error?.error?.message}
        </p>
      </div>
    </div>
  );
};
export default ErrorPage;
