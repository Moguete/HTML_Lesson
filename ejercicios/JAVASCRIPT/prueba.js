$(document).ready(() => {
  function equipoDefinitivo() {
    let pick1 = ["Papi", "Mankita", "gene", "carla"];
    let pick2 = ["candalija", "angel", "DONRAIMON", "zego"];
    let pick3 = ["R1NE", "zackon", "vansii", "thislion"];
    let pick4 = ["Titu", "Eric", "ale", "jonark"];

    let mid = ["Titu", "ale", "angel"];
    let top = ["R1NE", "zackon", "vansii"];
    let jung = ["vansii", "thislion", "candalija"];
    let adc = ["Moguete", "jonark"];
    let supp = ["Papi", "carla", "Mankita"];

    var equipoDefinitivoOP = [];
    var freelines = ["top", "jungla", "mid", "adc", "support"];
    var fullfreelines = [top, jung, mid, adc, supp];
    console.log(
      "Bienvenido a TeamOP, el programa creado por y para Moguete para facilitar la selección de jugadores"
    );
    console.log("Las opciones para tu primer pick son: ", pick1);
    console.log("¿Con cual te quedas?");
    let pickeo = prompt(
      "Introduce tu primer pickeo",
      "El mas OP, gracias"
    );
    equipoDefinitivoOP.push(pickeo);

    //-------------------supp-----------------
    if (supp.includes(pickeo)) {
      let linepick = "support";
      let indexsupp = supp.indexOf(pickeo);
      let indexline = freelines.indexOf(linepick);
      freelines.splice(indexline, indexline + 1);
      fullfreelines.splice(indexline, indexline + 1);
      supp.splice(indexsupp, indexsupp + 1);
      console.log("Asi está el equipo: ", equipoDefinitivoOP);
      console.log("Opciones para el segundo pick: ", pick2);
      console.log("Los", freelines, "disponibles son: ", fullfreelines);
      console.log("Falta por pickear: ", freelines);
      return equipoDefinitivoOP, freelines, fullfreelines;
    }
    //-------------------top-----------------
    else if (top.includes(pickeo)) {
      let linepick = "top";
      let indextop = top.indexOf(pickeo);
      let indexline = freelines.indexOf(linepick);
      freelines.splice(indexline, indexline + 1);
      fullfreelines.splice(indexline, indexline + 1);
      top.splice(indextop, indextop + 1);
      console.log("Asi está el equipo: ", equipoDefinitivoOP);
      console.log("Opciones para el segundo pick: ", pick2);
      console.log("Los", freelines, "disponibles son: ", fullfreelines);
      console.log("Falta por pickear: ", freelines);
      return equipoDefinitivoOP, freelines, fullfreelines;
    }
    //-------------------jung-----------------
    else if (jung.includes(pickeo)) {
      let linepick = "jungla";
      let indexjung = jung.indexOf(pickeo);
      let indexline = freelines.indexOf(linepick);
      freelines.splice(indexline, indexline + 1);
      fullfreelines.splice(indexline, indexline + 1);
      jung.splice(indexjung, indexjung + 1);
      console.log("Asi está el equipo: ", equipoDefinitivoOP);
      console.log("Opciones para el segundo pick: ", pick2);
      console.log("Los", freelines, "disponibles son: ", fullfreelines);
      console.log("Falta por pickear: ", freelines);
      return equipoDefinitivoOP, freelines, fullfreelines;
    }
    //-------------------mid-----------------
    else if (mid.includes(pickeo)) {
      let linepick = "mid";
      let indexmid = mid.indexOf(pickeo);
      let indexline = freelines.indexOf(linepick);
      freelines.splice(indexline, indexline + 1);
      fullfreelines.splice(indexline, indexline + 1);
      mid.splice(indexmid, indexmid + 1);
      console.log("Asi está el equipo: ", equipoDefinitivoOP);
      console.log("Opciones para el segundo pick: ", pick2);
      console.log("Los", freelines, "disponibles son: ", fullfreelines);
      console.log("Falta por pickear: ", freelines);
      return equipoDefinitivoOP, freelines, fullfreelines;
    }
    //-------------------adc-----------------
    else if (adc.includes(pickeo)) {
      let linepick = "adc";
      let indexadc = adc.indexOf(pickeo);
      let indexline = freelines.indexOf(linepick);
      freelines.splice(indexline, indexline + 1);
      fullfreelines.splice(indexline, indexline + 1);
      adc.splice(indexadc, indexadc + 1);
      console.log("Asi está el equipo: ", equipoDefinitivoOP);
      console.log("Opciones para el segundo pick: ", pick2);
      console.log("Los", freelines, "disponibles son: ", fullfreelines);
      console.log("Falta por pickear: ", freelines);
      return equipoDefinitivoOP, freelines, fullfreelines;
    }
  }
  $("#img-clck").click(equipoDefinitivo);
});

// equipoDefinitivo("Papi");
// equipoDefinitivo("R1NE");
// equipoDefinitivo("candalija");