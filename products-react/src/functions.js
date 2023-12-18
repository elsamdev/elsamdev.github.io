import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function show_alerta(mensaje,icono,foco=''){
    console.log('jose  ' + icono);
    const MySwal = withReactContent(swal);
    MySwal.fire({
        icon: icono,
        title: mensaje
    });
}

function onfocus(foco){
    if(foco !== ''){
        document.getElementById(foco).focus();
    }
}