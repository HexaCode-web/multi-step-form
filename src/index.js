"use strict";
var DB = {
    FirstForm: {},
    SecondForm: 0,
    ThirdForm: {}
};
var Forms = Array.from(document.querySelectorAll(".form"));
var formEl = document.querySelector("#FirstForm");
var Position = Array.from(document.querySelectorAll(".position"));
var Next2 = document.querySelector("#two").querySelector(".Next");
var BackList = document.querySelectorAll(".back");
var Next3 = document.querySelector("#three").querySelector(".Next");
var Next4 = document.querySelector("#four").querySelector(".Next");
var AddonList = document.querySelectorAll(".form-check-input");
var boxLIST = document.querySelectorAll(".box");
var plan = 0;
var FirstFormResult = {};
var PrintResult = function (PLAN, Addons) {
    var Plan = document.querySelector("#PlanResult");
    var TotalValue = 0;
    var TOTAL = document.querySelector(".Total");
    var AddonListEL = document.querySelector("#AddOnResult");
    Plan.querySelector(".Name").innerHTML = " ";
    Plan.querySelector(".Price").innerHTML = " ";
    AddonListEL.innerHTML = " ";
    switch (PLAN) {
        case 1:
            Plan.querySelector(".Name").innerHTML = "Arcade";
            Plan.querySelector(".Price").innerHTML = "$90/yr";
            TotalValue += 90;
            break;
        case 2:
            Plan.querySelector(".Name").innerHTML = "Advanced";
            Plan.querySelector(".Price").innerHTML = "$120/yr";
            TotalValue += 120;
            break;
        case 3:
            Plan.querySelector(".Name").innerHTML = "Pro";
            Plan.querySelector(".Price").innerHTML = "$150/yr";
            TotalValue += 150;
            break;
    }
    Addons.forEach(function (Addon) {
        switch (Addon) {
            case 10:
                AddonListEL.innerHTML += "<li><span>Online service</span><span>".concat(Addon, "/yr</span></li>");
                TotalValue += 10;
                break;
            case 20:
                AddonListEL.innerHTML += "<li><span>Customizable Profile</span><span>".concat(Addon, "/yr</span></li>");
                TotalValue += 20;
                break;
            case 25:
                AddonListEL.innerHTML += "<li><span>Larger storage</span><span>20/yr</span></li>";
                TotalValue += 20;
                break;
            default:
                break;
        }
    });
    TOTAL.innerHTML = "<span>Total:</span><span>".concat(TotalValue, "/yr</span>");
};
boxLIST.forEach(function (box) {
    var boxEl = box;
    boxEl.addEventListener("click", function () {
        boxLIST.forEach(function (box2) {
            box2.classList.remove("selected");
        });
        boxEl.classList.toggle("selected");
    });
});
AddonList.forEach(function (element) {
    var addonEL = element;
    addonEL.addEventListener('change', function () {
        var _a, _b;
        if (addonEL.checked) {
            (_a = addonEL.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("selected");
        }
        else {
            (_b = addonEL.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("selected");
        }
    });
});
BackList.forEach(function (button) {
    var BackListAR = Array.from(BackList);
    button.addEventListener("click", function () {
        Position[BackListAR.indexOf(button) + 1].classList.remove("active");
        Position[BackListAR.indexOf(button)].classList.add("active");
        Forms[BackListAR.indexOf(button) + 1].classList.add("hidden");
        Forms[BackListAR.indexOf(button)].classList.remove("hidden");
    });
});
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(formEl);
    FirstFormResult = {
        email: formData.get("Email"),
        phone: formData.get("Phone"),
        fname: formData.get("Name"),
    };
    Position[0].classList.remove("active");
    Position[1].classList.add("active");
    Forms[0].classList.add("hidden");
    Forms[1].classList.remove("hidden");
    DB.FirstForm = FirstFormResult;
});
Next2.addEventListener("click", function () {
    boxLIST.forEach(function (box) {
        if (box.classList[1]) {
            plan = Array.from(boxLIST).indexOf(box) + 1;
        }
    });
    switch (plan) {
        case 1:
            DB.SecondForm = plan;
            break;
        case 2:
            DB.SecondForm = plan;
            break;
        case 3:
            DB.SecondForm = plan;
            break;
        default:
            alert("please choose a plan");
            return;
    }
    Forms[1].classList.add("hidden");
    Forms[2].classList.remove("hidden");
    Position[1].classList.remove("active");
    Position[2].classList.add("active");
});
Next3.addEventListener("click", function () {
    var ThirdFormInner = [0, 0, 0];
    var FirstAddon = AddonList[0];
    var SecondAddon = AddonList[1];
    var ThirdAddon = AddonList[2];
    FirstAddon.checked ? ThirdFormInner[0] = 10 : ThirdFormInner[0] = 0;
    SecondAddon.checked ? ThirdFormInner[1] = 20 : ThirdFormInner[1] = 0;
    ThirdAddon.checked ? ThirdFormInner[2] = 25 : ThirdFormInner[2] = 0;
    DB.ThirdForm = ThirdFormInner;
    Forms[2].classList.add("hidden");
    Forms[3].classList.remove("hidden");
    Position[2].classList.remove("active");
    Position[3].classList.add("active");
    PrintResult(DB.SecondForm, ThirdFormInner);
});
Next4.addEventListener("click", function () {
    Forms[3].classList.add("hidden");
    Forms[4].classList.remove("hidden");
    Forms[4].style.display = "flex";
    Position[3].classList.remove("active");
    Position[4].classList.add("active");
});
