import { AbstractControl } from "@angular/forms";

export function forbiddenWordsValidator(control : AbstractControl) : {[key : string] : any} | null{
    const forbiddenWord =/admin/.test(control.value);
    return forbiddenWord? {'forbiddenWords' : {value : control.value} } : null;
}