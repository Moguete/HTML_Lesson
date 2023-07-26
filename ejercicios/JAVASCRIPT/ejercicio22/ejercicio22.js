let primitive = true;

switch (primitive) {
  case (typeof (primitive)) === "boolean":
    console.log("the primitive type is boolean");
    break;
  case (typeof (primitive)) === "number":
    console.log("the primitive type is a number");
    break;
  case (typeof (primitive)) === "string":
    console.log("the primitive type is a string");
    break;
  default:
    console.log("the value is invalid");
}
