import { AbstractControl, ValidatorFn } from "@angular/forms";

// basic custom validator

// export function forbiddenWordsValidator(control : AbstractControl) : {[key : string] : any} | null{
//     const forbiddenWord =/admin/.test(control.value);
//     return forbiddenWord? {'forbiddenWords' : {value : control.value} } : null;
// }

// Modified to accept several parameters FACTORY FUNCTION
export function forbiddenWordsValidator(forbiddenTerm : RegExp) : ValidatorFn{

    return (control : AbstractControl) : {[key : string] : any} | null => {
        const forbiddenWord =forbiddenTerm.test(control.value);
        return forbiddenWord? {'forbiddenWords' : {value : control.value} } : null;
    };

}


// export function forbiddenTermsValidator(control : AbstractControl) : {[key : string] : any} | null {
//     const forbiddenTerms = /sambu/.test(control.value);
//     return forbiddenTerms ? {'restrictedTerms' : {value : control.value}} : null;
// }

export function restrictedTermsValidator(restrictedTerm : RegExp) : ValidatorFn{

    return (control : AbstractControl) : {[key : string] : any} | null => {
        const forbiddenTerms = restrictedTerm.test(control.value);
        return forbiddenTerms ? {'restrictedTerms' : {value : control.value}} : null;
    }

}