
export const UPLOAD_PDF_PENDING = "UPLOAD_PDF_PENDING";
export const UPLOAD_PDF_SUCCESS = "UPLOAD_PDF_SUCCESS";
export const UPLOAD_PDF_ERROR = "UPLOAD_PDF_ERROR";



export function uploadPDFPending() {
    return {
        type: UPLOAD_PDF_PENDING,
        
    };
}

export function uploadPDFSuccess(file) {
    return {
        type: UPLOAD_PDF_SUCCESS,
        uploadedFile: file,
    };
}

export function uploadPDFError() {
    return {
        type: UPLOAD_PDF_ERROR,
      
    };
}

