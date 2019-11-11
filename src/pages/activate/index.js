import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import Api from "../../services/api";

import logo from "../../assets/logo.png";
function ActivatePage(props) {
  const {
    location: { search }
  } = props;
  const [redirect, setRedirect] = useState(false);

  const ActivateSucess = () => {
    return Swal.fire({
      title: "Parabéns!",
      text: "Você está pronto para testar a fase beta do Lunna",
      imageUrl: logo,
      imageWidth: 200,
      imageHeight: 222,
      imageAlt: "lunna",
      animation: true
    });
  };

  const ActivateFailed = () => {
    Swal.fire({
      title: "Ops!",
      text: "ocorreu uma falha na sua ativação",
      type: "warning",
      animation: false,
      customClass: {
        popup: "animated tada"
      }
    });
  };
  useEffect(() => {
    const values = queryString.parse(search);
    Api.post(`/subscribe/activate`, values)
      .then(function(response) {
        ActivateSucess();
        setRedirect(true);
      })
      .catch(function(error) {
        ActivateFailed();
        setRedirect(true);
      });
  }, [search]);
  return redirect && <Redirect to="/" />;
}
export default ActivatePage;
