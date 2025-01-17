import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Error() {
    const err = useRouteError();
    const navigate = useNavigate();
    function goToHome() {
        navigate('/');
    }

    return (
    <>
        <div className="h-screen flex flex-col justify-center items-center gap-5 font-serif ">
            <h1 className="text-9xl font-bold text-indigo-900">Oops!</h1>
            <h2 className="text-3xl font-semibold">{err.status} {err.statusText}</h2>
            <p className="text-slate-700">{err.data}</p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-3xl text-sm font-semibold transition ease-in-out hover:scale-105" type="button" onClick={goToHome}>GO TO HOMEPAGE</button>
        </div>
    </>
);
}

export default Error;