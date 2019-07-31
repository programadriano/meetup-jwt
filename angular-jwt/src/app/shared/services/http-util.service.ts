import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpUtilService {

    constructor() { }

    extrairDados(response: Response) {
        const data = response;      
        return data || {};
    }

    processarErros(erro: any) {      
        return Observable.throw("Erro acessando servidor remoto.");
    }

}
