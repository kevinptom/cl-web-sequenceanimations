# 🐇 Sequencing Animations - MDN Web Docs Assessment

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

A dynamic JavaScript project completing the **"Sequencing animations"** assessment from the MDN Web Docs Asynchronous JavaScript module. This project demonstrates how to elegantly chain animations together so they run one after the other.

## 🌟 Live Demo

 https://kevinptom.github.io/cl-web-sequenceanimations/

---

## 🎯 Project Overview

The goal of this project was to update a webpage to play a series of animations in a strict sequence. Specifically, "Alice 1" must tumble, and only when she finishes should "Alice 2" begin, followed finally by "Alice 3".

To achieve this without falling into "callback hell", the project utilizes the **Web Animations API** combined with modern asynchronous JavaScript techniques.

### 🧠 Key Concepts & Skills Applied
* **Web Animations API:** Using the `Element.animate()` method to trigger CSS-like animations directly from JavaScript.
* **Promises:** Utilizing the `.finished` property of the `Animation` object, which returns a Promise that resolves when the animation completes.
* **Async/Await Syntax:** Writing clean, readable, and non-blocking asynchronous code to chain the tumbling animations sequentially.
* **DOM Manipulation:** Selecting and interacting with specific SVG elements on the page.


## 🚀 How to Run Locally

Want to see the Alices tumble on your own machine? It's easy!

1. **Clone the repository:**
   ```bash
   git clone  https://github.com/kevinptom/cl-web-sequenceanimations.git
