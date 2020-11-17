<template>
  <div class="pdf">
    <h1>This is an property page</h1>
    <button @click="createPDF">Générer PDF</button>
    <div id="template">
        Hello world!!
    </div>
  </div>
  
</template>


<script>

import jsPDF from 'jspdf'

export default {
  name: 'PDF',
  methods: {
      createPDF () {
          console.log("Create PDF function !")
          var doc = new jsPDF({
              orientation: 'p',
              unit: 'mm',
              format: 'a4'
          });
          var A4width = 210;
          var leftMargin = 15;
          var offsetTo = A4width*(2/3)-10;
          var actualLine = 15;
          //var A4heigh = 297;

        //   doc.html(document.getElementById("template"), {
        //       x: 10,
        //       y:10,
        //       filename: "quittance.pdf",
        //       callback: function (doc) {
        //           doc.output('dataurlnewwindow');
        //       }
        //   });
        doc.name = "test.pdf";
        doc.setFontSize(18);
        doc.text("QUITTANCE DE LOYER",A4width/2,actualLine,{
            align: 'center'
        });

        doc.setFontSize(16);
        actualLine += 7;
        doc.text("N°2020-11",A4width/2,actualLine,{
            align: 'center'
        });
        
        //From/To
        doc.setFontSize(12);
        actualLine += 21;
        doc.text("A l'attention de :",leftMargin,actualLine);
        doc.text("Délivré par :",offsetTo,actualLine);
        actualLine += 6;
        doc.text("Dupond Jean",leftMargin,actualLine);
        doc.text("M. Le proprio",offsetTo,actualLine);
        actualLine += 6;
        doc.text("1 rue du paradis",leftMargin,actualLine);
        doc.text("15 rue de la fortune",offsetTo,actualLine);
        actualLine += 6;
        doc.text("45000 Orléans",leftMargin,actualLine);
        doc.text("45000 Orléans",offsetTo,actualLine);

        //Body
        actualLine += 21;
        //Déclare avoir reçu paiement du loyer du bien situé à l'adresse suivante :
        doc.text("Déclare avoir reçu paiement du loyer du bien situé à l'adresse suivante :",leftMargin,actualLine);
        actualLine += 6;
        doc.text("Appartement 415",leftMargin+10,actualLine);
        actualLine += 6;
        doc.text("1 rue du paradis",leftMargin+10,actualLine);
        actualLine += 6;
        doc.text("45000 Orléans",leftMargin+10,actualLine);
        actualLine += 6;
        doc.text("Pour la période du 01/02/2020 au 28/02/2020 pour un montant total de 435 euros",leftMargin,actualLine);
        // correspondant aux sommes suivantes :
        actualLine += 6;
        doc.text("correspondant aux sommes suivantes :",leftMargin,actualLine);

        doc.output('dataurlnewwindow');
      }
  }
}


</script>