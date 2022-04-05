import React from "react";

/**
 * function responsible for adding specific cnj symbols.
 * @param {String} value - the cnj number.
 * @returns 
 */
export const cnjMask = (value) => {

    //'[0-9]{7}-[0-9]{2}.[0-9]{4}.[0-9]{1}.[0-9]{2}.[0-9]{4}'
    
    return value
        .replace(/\D/g, '') 
        .replace(/(\d{7})(\d)/, '$1-$2') 
        .replace(/(\d{7}-\d{2})(\d)/, '$1.$2')
        .replace(/(\d{7}-\d{2}.\d{4})(\d)/, '$1.$2')
        .replace(/(\d{7}-\d{2}.\d{4}.\d{1})(\d)/, '$1.$2')
        .replace(/(\d{7}-\d{2}.\d{4}.\d{1}.\d{2})(\d)/, '$1.$2')
  }