import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return <div className="flex-grow min-w-max min-h-screen flex flex-col justify-center items-center">
        <div className="text-6xl font-bold"><h1>Oops</h1></div>
        <div>
        <p className="text-xl m-4 text-gray-400">Sorry, an unexpected error has occurred.</p>
        <p className="text-2xl m-4 text-center">{error.status} - {error.statusText || error.error.message}</p>
        </div>

    </div>
}
export default ErrorPage;
