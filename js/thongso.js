initgarbage();

function initgarbage() {
    const G_Liquid = document.querySelector(".Bliquid");
    const G_Status = document.querySelector(".Bstatus");
    const Bpercentage = document.querySelector(".Bpercentage");
    navigator.getBattery().then((data) => {   //truy cập vào API pin : navigator.getBattery()
        // chuyển đổi từ số sang %
        updategarbage = () => {
            let level = Math.floor(data.level * 100);
            Bpercentage.innerHTML = level + "%";
            G_Liquid.style.height = `${parseInt(data.level * 100)}%`;
            if (level == 100) {
                G_Status.innerHTML = `garbage Full <i class="ri-garbage-2-fill red-color"></i>`;
                G_Liquid.style.height = "103%";
            } else if (level <= 20 ) {
                G_Status.innerHTML = `Low Charge`;
            } else {
                G_Status.innerHTML = "";
            }


            // màu sắc theo %
            if (level <= 20) {
                G_Liquid.classList.add("gradient-color-green");
                G_Liquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-yellow");
            } else if (level <= 48) {
                G_Liquid.classList.add("gradient-color-orange");
                G_Liquid.classList.remove("gradient-color-green", "gradient-color-red", "gradient-color-yellow");
            } else if (level <= 80) {
                G_Liquid.classList.add("gradient-color-yellow");
                G_Liquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-red");
            } else {
                G_Liquid.classList.add("gradient-color-red");
                G_Liquid.classList.remove("gradient-color-red", "gradient-color-orange", "gradient-color-yellow");
            }
        }
        updategarbage();
        batt.addEventListener("chargingchange", () => { updategarbage() });
        batt.addEventListener("levelchange", () => { updategarbage });
    })
}