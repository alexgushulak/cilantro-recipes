import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <div id="error-page" style={{ textAlign: "center", margin: "0 auto"}}>
      <h1>Oops!</h1>
      <h1>404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as {statusText?: string}).statusText || (error as {message?: string}).message}</i>
      </p>
    </div>
  );
}