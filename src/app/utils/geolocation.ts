// exports.subHandlerError = (err) => {
//     let error = JSON.parse(JSON.stringify(err));
//     console.log(error);
// }

export function ativarGEOLOCATION(sucesso, erro){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sucesso, erro);
    }
}