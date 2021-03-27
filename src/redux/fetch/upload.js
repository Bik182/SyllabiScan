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
      "https://api.pdf.co/v1/pdf/convert/to/text?x-api-key=bikalt182@gmail.com_aa8bae2da0c3085d&url=filetoken://ec34996d2c8880c5e0e37d80&inline=true",
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
          console.log("upload succ: ", json.body);
          dispatch(uploadPDFSuccess(json.body));
        } else {
          console.log("upload failed.ks", json);
        }
      })
      .catch((err) => {
        console.log("upload failed.ks", err);
      });
  };
}
