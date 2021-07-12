import { Injectable } from "@angular/core";

export interface form {
    name: string;
    value: string;
    required: boolean;
    des: string;
}
  
export interface buttonLabel {
    label: string
}

@Injectable({
    providedIn: 'root'
})
export class FormMetaData {
    formData: form[] = [
        { name: 'firstName', value: '', required: true, des: 'Imię studenta' },
        { name: 'lastName', value: '', required: true, des: 'Nazwisko studenta' },
        { name: 'major', value: '', required: true, des: 'Kierunek studiów' },
        { name: 'gradePointAverage', value: '', required: true, des: 'Średnia ocen' },
        { name: 'description', value: '', required: true, des: 'Opis' }
    ];
}