class Card {
  constructor(dept, course, desc) {
    this.dept = dept;
    this.course = course;
    this.desc = desc;
  }

  renderDept() {
    const container = document.createElement("h2");
    const text = document.createTextNode(this.dept);
    container.classList.add("card__dept");
    container.appendChild(text);
    return container;
  }

  renderCourse() {
    const container = document.createElement("h1");
    const text = document.createTextNode(this.course);
    container.classList.add("card__course");
    container.appendChild(text);
    return container;
  }

  renderDesc() {
    const container = document.createElement("p");
    const text = document.createTextNode(this.desc);
    container.classList.add("card__desc");
    container.appendChild(text);
    return container;
  }

  renderLink() {
    const a = document.createElement("a");
    const span = document.createElement("span");
    a.href = "notes/" + this.course;
    a.appendChild(span);
    return a;
  }

  /*
  * Renders the contents of this card onto the DOM
  */
  renderCard() {
    const card = document.querySelector(".card");
    const contentContainer = document.querySelector(".card__content");

    const dept = this.renderDept();
    const course = this.renderCourse();
    const desc = this.renderDesc();
    const a = this.renderLink();

    contentContainer.appendChild(dept);
    contentContainer.appendChild(course);
    contentContainer.appendChild(desc);

    card.appendChild(a);
  }

  /*
  * Removes this card from the DOM
  */
  destroy() {
    const card = document.querySelector(".card");
    const content = document.querySelector(".card__content");

    const dept = document.querySelector(".card__dept");
    const course = document.querySelector(".card__course");
    const desc = document.querySelector(".card__desc");
    const a = document.getElementsByTagName("a")[0];

    content.removeChild(dept);
    content.removeChild(course);
    content.removeChild(desc);
    card.removeChild(a);
  }
}

class CardList {
  constructor() {
    this.cards = [];
    this.active = 0;
    this.length = 0;
  }

  add(card) {
    this.cards.push(card);
    this.length++;
  }

  remove(card) {
    const indexToRemove = this.cards.indexOf(card);
    const newArray = this.cards.splice(indexToRemove, 1);
    this.cards = newArray;
  }

  destroyActive() {
    const active = this.cards[this.active];
    active.destroy();
  }

  activateNext() {
    if (this.active + 1 < this.length) {
      this.destroyActive();

      const result = this.cards[this.active + 1];
      this.active++;
      result.renderCard();

      return result;
    }
  }

  activatePrev() {
    if (this.active - 1 >= 0) {
      this.destroyActive();

      const result = this.cards[this.active - 1];
      this.active--;
      result.renderCard();

      return result;
    }
  }

  render() {
    const card = this.cards[this.active];
    card.renderCard();
  }

}

function main() {
  const cardList = new CardList();
  const card210 = new Card("CPSC", 210, "Software Construction");
  const card221 = new Card("CPSC", 221, "Beginner Algorithms and Data Structures");
  const card213 = new Card("CPSC", 213, "Introduction to Computer Systems");

  cardList.add(card210);
  cardList.add(card221);
  cardList.add(card213);

  cardList.render();

  const btnNext = document.querySelector(".btn--next");
  const btnPrev = document.querySelector(".btn--prev");
  btnNext.addEventListener("click", () => {
    cardList.activateNext();
  });
  btnPrev.addEventListener("click", () => {
    cardList.activatePrev();
  });
}

document.body.onload = main;