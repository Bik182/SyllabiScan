
export const UPLOAD_PDF_PENDING = "UPLOAD_PDF_PENDING";
export const UPLOAD_PDF_SUCCESS = "UPLOAD_PDF_SUCCESS";
export const UPLOAD_PDF_ERROR = "UPLOAD_PDF_ERROR";

export const EVENT_PARSE_PENDING = "EVENT_PARSE_PENDING";
export const EVENT_PARSE_SUCCESS = "EVENT_PARSE_SUCCESS";
export const EVENT_PARSE_ERROR = "EVENT_PARSE_ERROR";

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



export function eventParsePending() {
    return {
        type: EVENT_PARSE_PENDING,
        
    };
}

export function eventParseSuccess() {
    return {
        type: EVENT_PARSE_SUCCESS,
       
    };
}

export function eventParseError() {
    return {
        type: EVENT_PARSE_ERROR,
      
    };
}

