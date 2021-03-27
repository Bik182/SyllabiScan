import {
  uploadPDFPending,
  uploadPDFSuccess,
  uploadPDFError,
} from "../actions/action.js";

//https://file.io/TFU1OHXzMRS6

export function uploadPDF() {
  return (dispatch) => {
    var formBody = {
      url:
        "https://srv-store3.gofile.io/download/N6W26b/3664f78a8377da426417dd41ba87ab59/testPDF.pdf",
      inline: true,
    };

    dispatch(uploadPDFPending());

    // fetch("https://api.pdf.co/v1/pdf/convert/to/json2", {
    fetch(
      "https://api.pdf.co/v1/pdf/convert/to/text?x-api-key=bikalt182@gmail.com_aa8bae2da0c3085d&url=filetoken://d310c3232c11a8944bdb30c9&inline=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "{{bikalt182@gmail.com_aa8bae2da0c3085d}}",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.error == false) {
          console.log("addFriendSuccess: ", json.body);
          dispatch(uploadPDFSuccess(json.body));
        } else {
          console.log("adderror.ks", json);
        }
      })
      .catch((err) => {
        console.log("add errir.ks", err);
      });
  };
}
