type FinalData = {
    FirstForm: object,
    SecondForm: number,
    ThirdForm:object
}
let DB: FinalData = {
    FirstForm: {},
    SecondForm: 0,
    ThirdForm:{}
}
const Forms=Array.from(document.querySelectorAll(".form")!)
const formEl: HTMLFormElement = document.querySelector("#FirstForm")!;
const Position = Array.from(document.querySelectorAll(".position"))
const Next2 = document.querySelector("#two")!.querySelector(".Next")!
const BackList=document.querySelectorAll(".back")
const Next3 = document.querySelector("#three")!.querySelector(".Next")!
const Next4=document.querySelector("#four")!.querySelector(".Next")!
const AddonList=document.querySelectorAll(".form-check-input")!
const boxLIST = document.querySelectorAll(".box")
let plan=0
let FirstFormResult = {}
const PrintResult = (PLAN:number,Addons:number[]) => {
    const Plan = document.querySelector("#PlanResult")!
    let TotalValue = 0
    const TOTAL=document.querySelector(".Total")!
    const AddonListEL = document.querySelector("#AddOnResult")!;
    Plan.querySelector(".Name")!.innerHTML = " "
    Plan.querySelector(".Price")!.innerHTML=" "
    AddonListEL.innerHTML=" "
    switch (PLAN) {
        case 1:
            Plan.querySelector(".Name")!.innerHTML = "Arcade"
            Plan.querySelector(".Price")!.innerHTML = "$90/yr"
            TotalValue +=90
            break;
            case 2:
                Plan.querySelector(".Name")!.innerHTML = "Advanced"
            Plan.querySelector(".Price")!.innerHTML = "$120/yr"
            TotalValue +=120
            break; 
            case 3:
                Plan.querySelector(".Name")!.innerHTML = "Pro"
            Plan.querySelector(".Price")!.innerHTML = "$150/yr"
            TotalValue +=150
            break;
    }
    Addons.forEach(Addon => {
        switch (Addon) {
                case 10:
                    AddonListEL.innerHTML += `<li><span>Online service</span><span>${Addon}/yr</span></li>`
                    TotalValue +=10
                break;
                case 20:
                    AddonListEL.innerHTML+=`<li><span>Customizable Profile</span><span>${Addon}/yr</span></li>`
                    TotalValue +=20
                break;
                case 25:
                    AddonListEL.innerHTML += `<li><span>Larger storage</span><span>20/yr</span></li>`
                    TotalValue +=20
                break;
                default:
                break;
        }
    });
    TOTAL.innerHTML=`<span>Total:</span><span>${TotalValue}/yr</span>` as unknown as string
  };
boxLIST.forEach(box => {
    let boxEl=box as unknown as HTMLDivElement
    boxEl.addEventListener("click", () => {
        boxLIST.forEach(box2 => {
            box2.classList.remove("selected")
        })
        boxEl.classList.toggle("selected")
    })
});
AddonList.forEach(element => {
    let addonEL  = element as unknown as HTMLInputElement
    addonEL.addEventListener('change', () => {
        if (addonEL.checked) {
          addonEL.parentElement?.classList.add("selected")
        } else {
            addonEL.parentElement?.classList.remove("selected")
        }
      })
});
BackList.forEach(button => {
    let BackListAR=Array.from(BackList)
    button.addEventListener("click", () => {
        Position[BackListAR.indexOf(button)+1].classList.remove("active")
        Position[BackListAR.indexOf(button)].classList.add("active")
        Forms[BackListAR.indexOf(button)+1].classList.add("hidden")
        Forms[BackListAR.indexOf(button)].classList.remove("hidden")
    })
});
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
      FirstFormResult = {
          email: formData.get("Email"),
          phone: formData.get("Phone"),
          fname: formData.get("Name"),
      };
      Position[0].classList.remove("active")
      Position[1].classList.add("active")
      Forms[0].classList.add("hidden")
      Forms[1].classList.remove("hidden")
      DB.FirstForm=FirstFormResult
  });
  
Next2.addEventListener("click", () => {
    boxLIST.forEach(box => {
        if (box.classList[1]) {
            plan = Array.from(boxLIST).indexOf(box) + 1
        }
    })
    switch (plan) {
        case 1:
            DB.SecondForm=plan
            break;
            case 2:
            DB.SecondForm=plan
            break;
            case 3:
            DB.SecondForm=plan
            break;
        default:
            alert("please choose a plan")
            return
    }
            Forms[1].classList.add("hidden")
            Forms[2].classList.remove("hidden")
            Position[1].classList.remove("active")
            Position[2].classList.add("active")
})
Next3.addEventListener("click", () => {
    let ThirdFormInner = [0,0,0]
    let FirstAddon = AddonList[0] as unknown as HTMLInputElement
    let SecondAddon = AddonList[1] as unknown as HTMLInputElement
    let ThirdAddon = AddonList[2] as unknown as HTMLInputElement
    FirstAddon.checked ? ThirdFormInner[0] = 10 : ThirdFormInner[0] = 0
    SecondAddon.checked ? ThirdFormInner[1]=20:ThirdFormInner[1]=0
    ThirdAddon.checked ? ThirdFormInner[2] = 25 : ThirdFormInner[2] = 0
    DB.ThirdForm = ThirdFormInner
    Forms[2].classList.add("hidden")
    Forms[3].classList.remove("hidden")
    Position[2].classList.remove("active")
    Position[3].classList.add("active")
    PrintResult(DB.SecondForm,ThirdFormInner)
})
Next4.addEventListener("click", () => {
    Forms[3].classList.add("hidden")
    Forms[4].classList.remove("hidden")
    Forms[4].style.display="flex"
    Position[3].classList.remove("active")
    Position[4].classList.add("active")
})