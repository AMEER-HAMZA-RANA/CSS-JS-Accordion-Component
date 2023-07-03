// // Start writing JavaScript here!
// //**** */ 🛠 Accordion: Building an accordion *****//

// // WITHOUT EVENT DELEGATION
// // let accordions = Array.from(document.querySelectorAll(".accordion"));
// // accordions.forEach((accord) => {
// //   let accordionHead = accord.querySelector(".accordion-header");
// //   accordionHead.addEventListener("click", (event) => {
// //     accord.classList.toggle("accordion-is-open");
// //   });
// // });

// // WITH EVENT DELEGATION
// const accordionContainer = document.querySelector(".acc-container");
// const accordionContent = document.querySelector(".accordion-content");
// // accordionContainer.addEventListener('click', event => {
// //   const accordionHeader = event.target.closest('.accordion__header')
// //   if (accordionHeader) {
// //     console.log('From header. Close accordion!')
// //   } else {
// //     console.log('Not from header. Ignore.')
// //   }
// // })
// accordionContainer.addEventListener("click", (e) => {
//   const header = e.target.closest(".accordion-header");
//   if (header) {
//     const container = header.parentElement;
//     container.classList.toggle("accordion-is-open");

//     // if(document.body.classList.contains('accordion-is-open')) {
//     // } else {
//     //   accordionContent.style.height = 0;
//     // }
//     // const height = accordionContent.getBoundingClientRect().height;
//     // console.log(height);
//     // accordionContent.style.height = height + 'px';
//     const accordionContent = header.nextElementSibling;
//     console.log(accordionContent);
//     const accordionInner = accordionContent.children[0];
//     console.log(accordionInner);
//     const height = accordionInner.getBoundingClientRect().height;
//     console.log(height);

//     accordionContent.style.height = height + 'px';

//   }
// });

// ---------------------------------------------------------------

/**
 * Finds the correct height of the accordion content
 * @param {HTMLElement} accordion The accordion
 * @returns {Number} Accordion content's height in px value
 */
const getContentHeight = (accordion) => {
  // const accordionContent = accordionHeader.nextElementSibling;
  // const accordionInner = accordionContent.children[0];
  const accordionInner = accordion.querySelector(".accordion__inner");
  let height = accordionInner.getBoundingClientRect().height;
  // return accordion.classList.contains("is-open")
  // ? /*accordionContent.style.height =*/ 0
  //   : /*accordionContent.style.height =*/ `${height}px`;

  // Its better to use if statements and early returns over ternary operators inside a dedicated function.
  if (accordion.classList.contains("is-open"))
    return (accordionInner.parentElement.style.height = 0);
  return (accordionInner.parentElement.style.height = `${height}px`);
};

const updateAcc = (accordion) => {
  accordion.classList.toggle("is-open");
};

const accordionContainer = document.querySelector(".accordion-container");

accordionContainer.addEventListener("click", (event) => {
  const accordionHeader = event.target.closest(".accordion__header");

  if (!accordionHeader) return;
  const accordion = accordionHeader.parentElement;
  // $$$Refactored from imperative code to declarative by making a function that returns height.
  // const accordionContent = accordionHeader.nextElementSibling;
  // const accordionInner = accordionContent.children[0];

  // let height = accordionInner.getBoundingClientRect().height;

  // // if (accordion.classList.contains("is-open")) {
  // //   accordionContent.style.height = 0;
  // // } else {
  // //   accordionContent.style.height = height + "px";
  // // }

  // $$$Refactored from imperative code to declarative by making a function that returns height.
  // const heightOfAcc = accordion.classList.contains("is-open")
  //   ? (accordionContent.style.height = 0)
  //   : (accordionContent.style.height = `${height}px`);
  // **********************************************
  const height = getContentHeight(accordion);

  // $$$Refactored from imperative code to declarative by making a function that updates accordion.
  // accordion.classList.toggle("is-open");
  updateAcc(accordion);
  // follow this general rule of thumb: Change the DOM only at the end (after you calculated everything you need).
  // accordionContent.style.height = height + "px";
});
