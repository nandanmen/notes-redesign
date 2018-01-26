/*
* Constructor for a Nav object.
* @param dept - the department for this class
* @param classNo - the class number this nav is attached to
* @param links - the links that the nav will contain
*/
function Nav(dept, classNo, links) {
  this.dept = dept;
  this.classNo = classNo;
  this.links = links;

  this.render = target => {
    const header = this.makeHeader();
    const links = this.makeLinks();

    target.appendChild(header);
    target.appendChild(links);
  }

  this.makeHeader = () => {
    const h1 = document.createElement("h1");
    h1.classList.add("nav__title");

    const span = document.createElement("span");
    span.innerText = this.dept;
    span.classList.add("nav__class");

    const text = document.createTextNode(this.classNo);

    h1.appendChild(span);
    h1.appendChild(text);
    return h1;
  }

  this.makeLinks = () => {
    const container = document.createElement("ul");
    for (let i = 0; i < this.links.length; i++) {
      const link = document.createElement("li");
      link.classList.add("nav__link");
      
      const linkNumber = document.createElement("div");
      linkNumber.classList.add("link__number");
      if ((i + 1) < 10) {
        linkNumber.innerText = "O" + (i + 1);
      } else {
        linkNumber.innerText = i + 1;
      }

      const linkText = document.createElement("p");
      linkText.classList.add("link__text");
      linkText.innerText = this.links[i];

      link.appendChild(linkNumber);
      link.appendChild(linkText);

      container.appendChild(link);
    }
    return container;
  }

  return {
    render : this.render
  }
}

function main() {
  const dept = "CS";
  const classNo = "221";
  const links = ["Asymptotic Analysis", "Mathematical Induction", "C++ Memory, Arrays, and the Call Stack", "Sorting Algorithms and Loop Invariants", "Dynamic Memory and Pointers", "Linked Lists"];

  const target = document.querySelector(".nav__content");

  const nav = new Nav(dept, classNo, links);
  nav.render(target);
}

document.body.onload = main;