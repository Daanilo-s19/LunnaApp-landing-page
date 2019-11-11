import React from "react";
import Swal from "sweetalert2";
import { Error, Return } from "./styles";
import "react-toastify/dist/ReactToastify.css";

function NotFound({ location }) {
  return (
    <>
      {setTimeout(
        Swal.fire({
          type: "warning",
          title: "404 - NOT FOUND",
          showConfirmButton: false,
          timer: 2500
        }),
        0
      )}
      <Error>
        <h1>
          The page <code>{location.pathname}</code> could not be found.
        </h1>
        <Return to="/">
          <b>HOME</b>
        </Return>
      </Error>
    </>
  );
}
export default NotFound;
