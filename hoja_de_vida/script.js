document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btn-pdf");

  btn.addEventListener("click", () => {
    downloadPDF();
  });
});

function downloadPDF() {
  const element = document.querySelector('#pdf-content');

  const opt = {
    margin: [10, 5, 15, 5],  // [arriba, izquierda, abajo, derecha] en mm
    filename: 'Hoja_de_Vida_Cristian_Correa.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      scrollY: 0
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  html2pdf().set(opt).from(element).save();
}
