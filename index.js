document.addEventListener("DOMContentLoaded", () => {
  const fromText = document.querySelector(".from-text");
  const toText = document.querySelector(".to-text");
  const exchageIcon = document.querySelector(".exchange");
  const selectTag = document.querySelectorAll("select");
  const icons = document.querySelectorAll(".row i");

  const storedText = sessionStorage.getItem("typedText");
  if (storedText) {
    fromText.value = storedText;
  }

  selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
      let selected =
        id == 0
          ? country_code == "uz-UZ"
            ? "selected"
            : ""
          : country_code == "en-GB"
          ? "selected"
          : "";
      let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
      tag.insertAdjacentHTML("beforeend", option);
    }
  });

  exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
      tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
  });

  fromText.addEventListener("input", () => {
    let text = fromText.value.trim(),
      translateFrom = selectTag[0].value,
      translateTo = selectTag[1].value;

    sessionStorage.setItem("typedText", text);

    if (!text) {
      toText.value = "";
      return;
    }

    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toText.value = data.responseData.translatedText;
        data.matches.forEach((data) => {
          if (data.id === 0) {
            toText.value = data.translation;
          }
        });
        toText.setAttribute("placeholder", "Translation");
      });
  });

  icons.forEach((icon) => {
    icon.addEventListener("click", ({ target }) => {
      if (!fromText.value || !toText.value) return;
      if (target.classList.contains("fa-copy")) {
        if (target.id == "from") {
          navigator.clipboard.writeText(fromText.value);
        } else {
          navigator.clipboard.writeText(toText.value);
        }
      } else {
        let ovoz;
        if (target.id == "from") {
          ovoz = new SpeechSynthesisUtterance(fromText.value);
          ovoz.lang = selectTag[0].value;
        } else {
          ovoz = new SpeechSynthesisUtterance(toText.value);
          ovoz.lang = selectTag[1].value;
        }
        speechSynthesis.speak(ovoz);
      }
    });
  });
});
