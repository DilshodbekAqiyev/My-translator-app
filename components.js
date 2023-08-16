export class AppHeader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const header = document.createElement("header");
    const time = document.createElement("div");
    const otherImages = document.createElement("div");
    const images = document.createElement("img");

    const date = new Date();
    time.textContent = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }`;
    time.classList.add("time");
    otherImages.classList.add("other");
    images.setAttribute("src", "./images/layout-others.svg");
    images.setAttribute("loading", "lazy");
    images.setAttribute("alt", "networks wifi battary");

    const style = document.createElement("style");
    style.textContent = `
    header {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
    }
    header .time {
      color: var(--neutrals-black, #191919);
      font-family: SF Pro Text;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.68px;
    }
    header .other img {
      width: 75px;
      height: 20px;
    }
    `;

    otherImages.appendChild(images);
    header.appendChild(time);
    header.appendChild(otherImages);

    shadow.appendChild(style);
    shadow.appendChild(header);
  }
}

export class AppFooter extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const footer = document.createElement("footer"),
      footerBox1 = document.createElement("div"),
      footerBox2 = document.createElement("div"),
      footerBox3 = document.createElement("div"),
      footerBox4 = document.createElement("div"),
      boxImgBox1 = document.createElement("div"),
      boxImgBox2 = document.createElement("div"),
      boxImgBox3 = document.createElement("div"),
      boxImgBox4 = document.createElement("div"),
      boxImg1 = document.createElement("img"),
      boxImg2 = document.createElement("img"),
      boxImg3 = document.createElement("img"),
      boxImg4 = document.createElement("img"),
      boxName1 = document.createElement("div"),
      boxName2 = document.createElement("div"),
      boxName3 = document.createElement("div"),
      boxName4 = document.createElement("div");

    boxImg1.setAttribute("src", "./images/home.svg");
    boxImg1.setAttribute("loading", "lazy");
    boxImg1.setAttribute("alt", "home-img");
    boxName1.textContent = "Home";
    boxName1.classList.add("box-name");

    boxImg2.setAttribute("src", "./images/history.svg");
    boxImg2.setAttribute("loading", "lazy");
    boxImg2.setAttribute("alt", "history-img");
    boxName2.textContent = "History";
    boxName2.classList.add("box-name");

    boxImg3.setAttribute("src", "./images/bank-card.svg");
    boxImg3.setAttribute("loading", "lazy");
    boxImg3.setAttribute("alt", "card-img");
    boxName3.textContent = "Card";
    boxName3.classList.add("box-name");

    boxImg4.setAttribute("src", "./images/wallet.svg");
    boxImg4.setAttribute("loading", "lazy");
    boxImg4.setAttribute("alt", "wallet-img");
    boxName4.textContent = "More";
    boxName4.classList.add("box-name");

    footerBox1.classList.add("footer-box");
    footerBox1.setAttribute("onclick", "toHome()");
    footerBox2.classList.add("footer-box");
    footerBox2.setAttribute("onclick", "toHistory()");
    footerBox3.classList.add("footer-box");
    footerBox3.setAttribute("onclick", "toCard()");
    footerBox4.classList.add("footer-box");
    footerBox4.setAttribute("onclick", "toMore()");

    boxImgBox1.appendChild(boxImg1);
    footerBox1.appendChild(boxImgBox1);
    footerBox1.appendChild(boxName1);
    boxImgBox2.appendChild(boxImg2);
    footerBox2.appendChild(boxImgBox2);
    footerBox2.appendChild(boxName2);
    boxImgBox3.appendChild(boxImg3);
    footerBox3.appendChild(boxImgBox3);
    footerBox3.appendChild(boxName3);
    boxImgBox4.appendChild(boxImg4);
    footerBox4.appendChild(boxImgBox4);
    footerBox4.appendChild(boxName4);

    const style = document.createElement("style");
    style.textContent = `
    footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 5px 10px;
      text-align: center;
    }
    .footer-box {
      padding: 5px 10px;
      cursor: pointer;
    }
    footer img {
      width: 24px;
      height: 24px;
    }
    footer .box-name {
      color: var(--neutrals-black-coral, #535d66);
      font-family: Sora;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
    `;

    footer.appendChild(footerBox1);
    footer.appendChild(footerBox2);
    footer.appendChild(footerBox3);
    footer.appendChild(footerBox4);

    shadow.appendChild(style);
    shadow.appendChild(footer);
  }
}
