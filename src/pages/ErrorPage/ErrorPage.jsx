import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError?.();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#244d3f] px-4 text-center text-white">
      <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest">
        404
      </h1>

      <div className="mt-2 rounded bg-white px-3 py-1 text-sm font-semibold text-[#244d3f]">
        Page Not Found
      </div>

      <p className="mt-6 max-w-md text-base md:text-lg text-white/80">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      {error?.statusText || error?.message ? (
        <p className="mt-2 text-sm text-white/60">
          {error.statusText || error.message}
        </p>
      ) : null}

      <Link
        to="/"
        className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-[#244d3f] transition hover:bg-white/90"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
