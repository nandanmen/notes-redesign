class Course {
  constructor(units) {
    this.units = units;
  }

  makeUnitLink(name, src) {
    const container = document.createElement("li");
    container.classList.add("nav__item--lone");
    
    const a = document.createElement("a");
    a.classList.add("link--nav");
    a.href = src;

    const text = document.createTextNode(name);
    a.appendChild(text);

    container.appendChild(a);
    return container;
  }

  render(target) {
    for (let i = 0; i < this.units.length; i++) {
      let name = this.units[i].title;
      let src = this.units[i].dest;
      const child = this.makeUnitLink(name, src);
      target.appendChild(child);
    }
  }
}

function main() {
  let links = [
    {
      title : "Asymptotic Analysis",
      dest : "01"
    },
    {
      title : "Mathematical Induction and Other Proofs",
      dest : "02"
    },
    {
      title : "C++ Memory, Arrays, and the Call Stack",
      dest : "03"
    },
    {
      title : "Basic Sorting Algorithms",
      dest : "04"
    },
    {
      title : "Dynamic Memory and Loop Invariants",
      dest : "05"
    },
    {
      title : "Linked Lists",
      dest : "06"
    },
    {
      title : "Stacks",
      dest : "07"
    },
    {
      title : "Queues",
      dest : "08"
    },
    {
      title : "Recursion",
      dest : "09"
    },
    {
      title : "Trees",
      dest : "10"
    }
  ];

  const nav = new Course(links);
  const target = document.querySelector(".nav-container");
  nav.render(target);
}

document.body.onload = main;