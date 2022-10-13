import { AbstractControl } from "@angular/forms";

export function forbiddenWordsValidator(control : AbstractControl) : {[key : string] : any} | null {
    const forbidden = /admin/.test(control.value)
    return forbidden? {'forbiddenWords' : {value : control.value}} : null;
}