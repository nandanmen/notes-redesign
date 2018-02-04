let isDev = true;

class Nav {
  constructor(links) {
    this.links = links;
  }

  isActive(dest) {
    let toCompare;
    if (isDev) {
      toCompare = window.location.href.substr(-13, 2);
    } else {
      toCompare = window.location.href.substr(-3, 2);
    }
    return toCompare === dest;
  }

  makeLink(title, dest) {
    const container = document.createElement("div");
    container.classList.add("nav__item");

    const btn = document.createElement("div");
    const a1 = document.createElement("a");
    const span = document.createElement("span");

    btn.classList.add("nav__button");
    if (this.isActive(dest)) {
      btn.classList.add("nav__button--active");
    }
    a1.href = "../" + dest;
    a1.appendChild(span);
    btn.appendChild(a1);

    const text = document.createElement("div");
    const textContent = document.createTextNode(title);
    const a2 = document.createElement("a");
    const span2 = document.createElement("span");
    a2.href = "../" + dest;
    a2.appendChild(span2);
    text.classList.add("nav__link");
    text.appendChild(textContent);
    text.appendChild(a2);

    container.appendChild(btn);
    container.appendChild(text);

    return container;
  }

  render(target) {
    for (let i = 0; i < this.links.length; i++) {
      const curr = this.links[i];
      const child = this.makeLink(curr.title, curr.dest);
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
    }
  ];

  const nav = new Nav(links);
  const target = document.querySelector(".nav--note");
  nav.render(target);
}

document.body.onload = main;