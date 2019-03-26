console.log("Hey");

$(".col-lg-3").on("click", event => {
  console.log("Clicked");
  let element = event.target;
  console.log("element", element);
});
