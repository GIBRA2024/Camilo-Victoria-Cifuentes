function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Victoria Cifuentes;Camilo J.;;;
FN:Camilo J. Victoria Cifuentes
TEL: +57 3005114223
NOTE: Negocios Corporativos 
EMAIL:camilo.victoria@jimenezpuerta.com
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function descargarContacto1() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Jimenez Puerta Abogados
TEL: +57 3187324455
EMAIL:facturacion@jimenezpuerta.com
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

