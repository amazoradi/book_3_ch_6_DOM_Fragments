// fragment creation
let fragment = document.createDocumentFragment()

// creating an article
let messageArt = document.createElement("article");
messageArt.setAttribute("id", "messages");
fragment.appendChild(messageArt);

// function creating messages
function createSections(content) {
  let messageHolder = document.createElement("section");
  messageHolder.classList.add("message")
  messageHolder.textContent = content;
  fragment.appendChild(messageHolder)
};

// calling function to make message sections
createSections("Happy 4th of july");
createSections("What are we blowing up today?!")
createSections("A literal tons of fireworks. Boom.")
createSections("When's the hotdog eating contest?")
createSections("Just before the fried twinkie eating contenst.")


document.body.appendChild(fragment);
