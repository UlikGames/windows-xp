const gatos = async () => {
  const url = "https://cataas.com/cat?json=true";
  const data = await fetch(url);
  const dataJson = await data.json();
  document.getElementById(
    "images-api-cat"
  ).src = `https://cataas.com${dataJson.url}`;
};

const clear_data_api_gato = () => {
  document.getElementById("images-api-cat").src = "";
};

document.getElementById("link-api-cats").addEventListener("click", gatos);
document
  .getElementById("close-button-image-cat")
  .addEventListener("click", clear_data_api_gato);
