/* getElementById 는 어레이를 만듬 */

function display(newId) {
  const checkId = document.getElementById(newId);
  if (checkId.classList == "off") {
    checkId.classList = "on";
  } else {
    checkId.classList = "off";
  }
}
