"use strict";

const validate = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
};

const modalJob1 = document.querySelector(".modal--1");
const modalJob2 = document.querySelector(".modal--2");
const modalJob3 = document.querySelector(".modal--3");
const modalJob4 = document.querySelector(".modal--4");
const modalJob5 = document.querySelector(".modal--5");
const modalJob6 = document.querySelector(".modal--6");

const btnMore1 = document.querySelector(".btn--more--1");
const btnMore2 = document.querySelector(".btn--more--2");
const btnMore3 = document.querySelector(".btn--more--3");
const btnMore4 = document.querySelector(".btn--more--4");
const btnMore5 = document.querySelector(".btn--more--5");
const btnMore6 = document.querySelector(".btn--more--6");

const viewMore1 = document.querySelector(".viewMore--1");
const viewMore2 = document.querySelector(".viewMore--2");
const viewMore3 = document.querySelector(".viewMore--3");
const viewMore4 = document.querySelector(".viewMore--4");
const viewMore5 = document.querySelector(".viewMore--5");
const viewMore6 = document.querySelector(".viewMore--6");

const viewLess1 = document.querySelector(".viewless1");
const viewLess2 = document.querySelector(".viewless2");
const viewLess3 = document.querySelector(".viewless3");
const viewLess4 = document.querySelector(".viewless4");
const viewLess5 = document.querySelector(".viewless5");
const viewLess6 = document.querySelector(".viewless6");

const btnLess1 = document.querySelector(".btn--less--1");
const btnLess2 = document.querySelector(".btn--less--2");
const btnLess3 = document.querySelector(".btn--less--3");
const btnLess4 = document.querySelector(".btn--less--4");
const btnLess5 = document.querySelector(".btn--less--5");
const btnLess6 = document.querySelector(".btn--less--6");

const modal = document.querySelector(".modal1");
const btnCheckEmail = document.querySelector(".btn--check");
const closeHide = document.querySelector(".close--hide");

const openModal = function () {
  modal.classList.remove("hide");
  closeHide.classList.add("hide");
};

const closeModal = function () {
  modal.classList.add("hide");
  closeHide.classList.remove("hide");
};

const openModal1 = function () {
  modalJob1.classList.remove("hide");
  viewMore1.classList.add("hide");
};

const closeModal1 = function () {
  modalJob1.classList.add("hide");
  viewMore1.classList.remove("hide");
};

const openModal2 = function () {
  modalJob2.classList.remove("hide");
  viewMore2.classList.add("hide");
};

const closeModal2 = function () {
  modalJob2.classList.add("hide");
  viewMore2.classList.remove("hide");
};

const openModal3 = function () {
  modalJob3.classList.remove("hide");
  viewMore3.classList.add("hide");
};

const closeModal3 = function () {
  modalJob3.classList.add("hide");
  viewMore3.classList.remove("hide");
};

const openModal4 = function () {
  modalJob4.classList.remove("hide");
  viewMore4.classList.add("hide");
};

const closeModal4 = function () {
  modalJob4.classList.add("hide");
  viewMore4.classList.remove("hide");
};

const openModal5 = function () {
  modalJob5.classList.remove("hide");
  viewMore5.classList.add("hide");
};

const closeModal5 = function () {
  modalJob5.classList.add("hide");
  viewMore5.classList.remove("hide");
};

const openModal6 = function () {
  modalJob6.classList.remove("hide");
  viewMore6.classList.add("hide");
};

const closeModal6 = function () {
  modalJob6.classList.add("hide");
  viewMore6.classList.remove("hide");
};

// btnCheckEmail.addEventListener("click", function () {
//   const input = document.getElementById("valueinput").value;
//   if (validate(input)) {
//     openModal();
//     console.log(`input: ${input}`);
//   } else {
//     alert(`Nhập lại email hợp lệ`);
//   }
// });

btnMore1.addEventListener("click", openModal1);
btnLess1.addEventListener("click", closeModal1);

btnMore2.addEventListener("click", openModal2);
btnLess2.addEventListener("click", closeModal2);

btnMore3.addEventListener("click", openModal3);
btnLess3.addEventListener("click", closeModal3);

btnMore4.addEventListener("click", openModal4);
btnLess4.addEventListener("click", closeModal4);

btnMore5.addEventListener("click", openModal5);
btnLess5.addEventListener("click", closeModal5);

btnMore6.addEventListener("click", openModal6);
btnLess6.addEventListener("click", closeModal6);
