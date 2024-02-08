function updateGallonsPerFoot() {
  var diameterSelect = document.getElementById("casingDiameter");
  var selectedDiameter = diameterSelect.value;
  var gallonsPerFoot;

  switch (selectedDiameter) {
    case "2":
      gallonsPerFoot = 0.4;
      break;
    case "3":
      gallonsPerFoot = 0.55;
      break;
    case "4":
      gallonsPerFoot = 0.65;
      break;
    case "5":
      gallonsPerFoot = 1.2;
      break;
    case "6":
      gallonsPerFoot = 1.5;
      break;
    case "8":
      gallonsPerFoot = 2.6;
      break;
    case "10":
      gallonsPerFoot = 4.2;
      break;
    case "12":
      gallonsPerFoot = 6;
      break;
    case "18":
      gallonsPerFoot = 13;
      break;
    case "24":
      gallonsPerFoot = 24;
      break;
    case "36":
      gallonsPerFoot = 53;
      break;
    case "48":
      gallonsPerFoot = 94;
      break;
    case "60":
      gallonsPerFoot = 147;
      break;
    default:
      gallonsPerFoot = 0;
  }

  document.getElementById("gallonsPerFoot").innerHTML = gallonsPerFoot;
}

function calculate() {
  // Get input values
  var wellDepth = parseFloat(document.getElementById("wellDepth").value);
  var staticDepth = parseFloat(document.getElementById("staticDepth").value);
  var hypochlorite = 3;
  var PartsPerMil = 100;

  // Get selected casing diameter and corresponding gallons per foot
  var diameterSelect = document.getElementById("casingDiameter");
  var selectedDiameter = diameterSelect.value;
  var gallonsPerFoot;

  switch (selectedDiameter) {
    case "2":
      gallonsPerFoot = 0.4;
      break;
    case "3":
      gallonsPerFoot = 0.55;
      break;
    case "4":
      gallonsPerFoot = 0.65;
      break;
    case "5":
      gallonsPerFoot = 1.2;
      break;
    case "6":
      gallonsPerFoot = 1.5;
      break;
    case "8":
      gallonsPerFoot = 2.6;
      break;
    case "10":
      gallonsPerFoot = 4.2;
      break;
    case "12":
      gallonsPerFoot = 6;
      break;
    case "18":
      gallonsPerFoot = 13;
      break;
    case "24":
      gallonsPerFoot = 24;
      break;
    case "36":
      gallonsPerFoot = 53;
      break;
    case "48":
      gallonsPerFoot = 94;
      break;
    case "60":
      gallonsPerFoot = 147;
      break;
    default:
      gallonsPerFoot = 0;
  }

  // Perform calculations
  var result =
    (((wellDepth - staticDepth) * gallonsPerFoot) / PartsPerMil) * hypochlorite;

  // Check if an extra step is required
  var finalResult = result;
  var formulaSteps = "";

  if (result >= 16) {
    result /= 16;
    finalResult = result;
    formulaSteps = `\n\n(Well Depth <b>-</b> Static Depth) <b>*</b> GallonsPerFoot <b>/</b> 100ppm) <b>*</b> 3oz needed per 100 gallons <b>/</b> 16-ounes in a pound\n\n <br> (${wellDepth} <b>-</b> ${staticDepth}) <b>*</b> ${gallonsPerFoot} <b>/</b> ${PartsPerMil}) <b>*</b> ${hypochlorite} <b>/</b> 16\n\n= <b>${result.toFixed(
      2
    )}lb Hypochlorite</b>\n\n`;
  } else {
    formulaSteps = `\n\n(Well Depth <b>-</b> Static Depth) <b>*</b> GallonsPerFoot <b>/</b> 100ppm) <b>*</b> 3oz needed per 100 gallons\n\n <br> (${wellDepth} <b>-</b> ${staticDepth}) <b>*</b> ${gallonsPerFoot} <b>/</b> ${PartsPerMil}) <b>*</b> ${hypochlorite}\n\n= <b>${result.toFixed(
      2
    )}oz Hypochlorite</b>\n\n`;
  }

  // Display the result and formula steps
  document.getElementById("formulaSteps").innerHTML = "" + formulaSteps;
}
