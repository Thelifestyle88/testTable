import { TTrain } from "./typesData";

function checkResponse(res: Response) {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => {
        err.statusCode = res.status;
        return Promise.reject(err);
    });
}

export function getTrains(): Promise<TTrain[]> {
    return fetch('https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json')
        .then(checkResponse)
}