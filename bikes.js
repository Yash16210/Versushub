// data for bikes
const bikeData = {
    TVSApache: {
        name: "TVS Apache 160",
        imgSrc: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130217/apache-180-right-side-view-2.png?isig=0&q=80&wm=3",
        specs: [
            { name: "Name: TVS Apache 160", class: "blue" },
            { name: "Engine Power: 159.7 cc", class: "blue" },
            { name: "Power: 17.63 PS", class: "blue" },
            { name: "Mileage: 40 kmpl", class: "blue" },
            { name: "Top Speed: 127 km/h", class: "blue" },
            { name: "Price: ₹1,25,000", class: "red" }
        ]
    },
    YamahaR15V4: {
        name: "Yamaha R15 V4",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/yamaha-select-model-metallic-red-1704802630538.png?q=80",
        specs: [
            { name: "Name: Yamaha R15 V4", class: "blue" },
            { name: "Engine Power: 155 cc", class: "blue" },
            { name: "Power: 18.4 PS", class: "blue" },
            { name: "Mileage: 45 kmpl", class: "blue" },
            { name: "Top Speed: 136 km/h", class: "blue" },
            { name: "Price: ₹1,77,000", class: "red" }
        ]
    },
    HeroXtreme125R: {
        name: "Hero Xtreme 125R",
        imgSrc: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/169073/xtreme-125r-right-side-view-4.png?isig=0&q=80&wm=3",
        specs: [
            { name: "Brand Name: Hero Xtreme 125R", class: "blue" },
            { name: "Engine Power: 124.7 cc", class: "blue" },
            { name: "Power: 10.8 PS", class: "blue" },
            { name: "Mileage: 50 kmpl", class: "blue" },
            { name: "Top Speed: 105 km/h", class: "blue" },
            { name: "Price: ₹85,000", class: "red" }
        ]
    },
    Classic350: {
        name: "Royal Enfield Classic 350",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-classic-350-heritage1725274941405.jpg?q=80",
        specs: [
            { name: "Name: Royal Enfield Classic 350", class: "blue" },
            { name: "Engine: 349.7 cc", class: "blue" },
            { name: "Power: 20.2 PS", class: "blue" },
            { name: "Mileage: 35 km/l", class: "blue" },
            { name: "Top Speed: 120 km/h", class: "blue" },
            { name: "Price: ₹2,25,000", class: "red" }
        ]
    },
    CB350: {
        name: "Honda CB350",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/honda-select-model-pearl-igneous-black-1700215595947.png?q=80",
        specs: [
            { name: "Name: Honda CB350", class: "blue" },
            { name: "Engine: 348 cc", class: "blue" },
            { name: "Power: 21 PS", class: "blue" },
            { name: "Mileage: 30 km/l", class: "blue" },
            { name: "Top Speed: 130 km/h", class: "blue" },
            { name: "Price: ₹2,10,000", class: "red" }
        ]
    },
    Duke250: {
        name: "KTM Duke 200",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/ktm-duke-250-standard1728459958743.jpg?q=80",
        specs: [
            { name: "Name: Honda CB350", class: "blue" },
            { name: "Engine: 248.8 cc", class: "blue" },
            { name: "Power: 30 PS", class: "blue" },
            { name: "Mileage: 30 km/l", class: "blue" },
            { name: "Top Speed: 140 km/h", class: "blue" },
            { name: "Price: ₹2,30,000", class: "red" }
        ]
    },
    Dominar400: {
        name: "Bajaj Dominar 400",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/bajaj-select-model-charcoal-black-1669289018001.png?q=80",
        specs: [
            { name: "Name: Bajaj Dominar 400", class: "blue" },
            { name: "Engine: 373.3 cc", class: "blue" },
            { name: "Power: 40 PS", class: "blue" },
            { name: "Mileage: 25 km/l", class: "blue" },
            { name: "Top Speed: 148 km/h", class: "blue" },
            { name: "Price: ₹2,50,000", class: "red" }
        ]
    },
    ApacheRR310: {
        name: "TVS Apache RR 310",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--red-without-quickshifter1726489981144.jpg?q=80",
        specs: [
            { name: "Name: TVS Apache RR 310", class: "blue" },
            { name: "Engine: 312.2 cc", class: "blue" },
            { name: "Power: 34 PS", class: "blue" },
            { name: "Mileage: 30 km/l", class: "blue" },
            { name: "Top Speed: 160 km/h", class: "blue" },
            { name: "Price: ₹2,90,000", class: "red" }
        ]
    },
    PulsarNS200: {
        name: "Bajaj Pulsar NS200",
        imgSrc: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/bajaj-select-model-glossy-ebony-black-1709101661264.png?q=80&wm=3",
        specs: [
            { name: "Name: Bajaj Pulsar NS200", class: "blue" },
            { name: "Engine: 199.5 cc", class: "blue" },
            { name: "Power: 24.5 PS", class: "blue" },
            { name: "Mileage: 35 km/l", class: "blue" },
            { name: "Top Speed: 136 km/h", class: "blue" },
            { name: "Price: ₹1,60,000", class: "red" }
        ]
    },
    Xtreme160R: {
        name: "Hero Xtreme 160R",
        imgSrc: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/bajaj-select-model-glossy-ebony-black-1709101661264.png?q=80&wm=3",
        specs: [
            { name: "Name: Hero Xtreme 160R", class: "blue" },
            { name: "Engine: 163 cc", class: "blue" },
            { name: "Power: 15.2 PS", class: "blue" },
            { name: "Mileage: 40 km/l", class: "blue" },
            { name: "Top Speed: 120 km/h", class: "blue" },
            { name: "Price: ₹1,35,000", class: "red" }
        ]
    },
    GixxerSF250: {
        name: "Suzuki Gixxer SF 250",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/suzuki-select-model-metallic-matte-black-no-2-2023-1686037589247.png?q=80",
        specs: [
            { name: "Name: Suzuki Gixxer SF 250", class: "blue" },
            { name: "Engine: 249 cc", class: "blue" },
            { name: "Power: 26.5 PS", class: "blue" },
            { name: "Mileage: 32 km/l", class: "blue" },
            { name: "Top Speed: 143 km/h", class: "blue" },
            { name: "Price: ₹1,75,000", class: "red" }
        ]
    },
    Hornet20: {
        name: "Honda Hornet 2.0",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/honda-select-model-pearl-igneous-black---obd-2-1693228291632.png?q=80",
        specs: [
            { name: "Name: Honda Hornet 2.0", class: "blue" },
            { name: "Engine: 189 cc", class: "blue" },
            { name: "Power: 17 PS", class: "blue" },
            { name: "Mileage: 40 km/l", class: "blue" },
            { name: "Top Speed: 130 km/h", class: "blue" },
            { name: "Price: ₹1,35,000", class: "red" }
        ]
    },
    Meteor350: {
        name: "Royal Enfield Meteor 350",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51245/meteor-350-right-side-view-10.png?isig=0&q=80",
        specs: [
            { name: "Name: Royal Enfield Meteor 350", class: "blue" },
            { name: "Engine: 349 cc", class: "blue" },
            { name: "Power: 20.2 PS", class: "blue" },
            { name: "Mileage: 35 km/l", class: "blue" },
            { name: "Top Speed: 120 km/h", class: "blue" },
            { name: "Price: ₹2,15,000", class: "red" }
        ]
    },
    Duke200: {
        name: "KTM Duke 200",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/ktm-duke-200-standard1727961894099.jpg?q=80",
        specs: [
            { name: "Name: KTM Duke 200", class: "blue" },
            { name: "Engine: 199.5 cc", class: "blue" },
            { name: "Power: 25 PS", class: "blue" },
            { name: "Mileage: 30 km/l", class: "blue" },
            { name: "Top Speed: 135 km/h", class: "blue" },
            { name: "Price: ₹1,95,000", class: "red" }
        ]
    },
    ApacheRTR2004V: {
        name: "TVS Apache RTR 200 4V",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/undefined-matte-blue-1604475089223.jpg?q=80",
        specs: [
            { name: "Name: TVS Apache RTR 200 4V", class: "blue" },
            { name: "Engine: 197.5 cc", class: "blue" },
            { name: "Power: 20.5 PS", class: "blue" },
            { name: "Mileage: 36 km/l", class: "blue" },
            { name: "Top Speed: 130 km/h", class: "blue" },
            { name: "Price: ₹1,45,000", class: "red" }
        ]
    },
    Gixxer250: {
        name: "Suzuki Gixxer 250",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/suzuki-select-model-metallic-matte-black-no-2-2023-1686037038276.png?q=80",
        specs: [
            { name: "Name: Suzuki Gixxer 250", class: "blue" },
            { name: "Engine: 249 cc", class: "blue" },
            { name: "Power: 26.5 PS", class: "blue" },
            { name: "Mileage: 34 km/l", class: "blue" },
            { name: "Top Speed: 143 km/h", class: "blue" },
            { name: "Price: ₹2,05,000", class: "red" }
        ]
    },
    Jawa42: {
        name: "Jawa 42",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/jawa-select-model-moonstone-white-1677502131250.png?q=80",
        specs: [
            { name: "Name: Jawa 42", class: "blue" },
            { name: "Engine: 293 cc", class: "blue" },
            { name: "Power: 27 PS", class: "blue" },
            { name: "Mileage: 35 km/l", class: "blue" },
            { name: "Top Speed: 135 km/h", class: "blue" },
            { name: "Price: ₹2,00,000", class: "red" }
        ]
    },
    W175: {
        name: "Kawasaki W175",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/kawasaki-select-model-ebony-1676444157537.png?q=80",
        specs: [
            { name: "Name: Kawasaki W175", class: "blue" },
            { name: "Engine: 177 cc", class: "blue" },
            { name: "Power: 13 PS", class: "blue" },
            { name: "Mileage: 40 km/l", class: "blue" },
            { name: "Top Speed: 120 km/h", class: "blue" },
            { name: "Price: ₹1,60,000", class: "red" }
        ]
    },
    CB300F: {
        name: "Honda CB300F",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/honda-select-model-mat-axis-grey-metallic-1694439610483.png?q=80",
        specs: [
            { name: "Name: Honda CB300F", class: "blue" },
            { name: "Engine: 286 cc", class: "blue" },
            { name: "Power: 30 PS", class: "blue" },
            { name: "Mileage: 35 km/l", class: "blue" },
            { name: "Top Speed: 145 km/h", class: "blue" },
            { name: "Price: ₹2,10,000", class: "red" }
        ]
    },
    Avenger220Cruise: {
        name: "Bajaj Avenger 220 Cruise",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/bajaj-select-model-auburn-black-1669289946200.png?q=80",
        specs: [
            { name: "Name: Bajaj Avenger 220 Cruise", class: "blue" },
            { name: "Engine: 220 cc", class: "blue" },
            { name: "Power: 19 PS", class: "blue" },
            { name: "Mileage: 35 km/l", class: "blue" },
            { name: "Top Speed: 115 km/h", class: "blue" },
            { name: "Price: ₹1,55,000", class: "red" }
        ]
    },
};

// Function to update the comparison based on user selection
function updateComparison() {
    for (let i = 1; i <= 3; i++) {
        const bikeSelector = document.getElementById(`bike${i}`);
        const imgElement = document.getElementById(`image${i}`);
        const specsElement = document.getElementById(`specs${i}`);

        if (!bikeSelector || !imgElement || !specsElement) {
            console.error(`Missing DOM element(s) for bike${i}`);
            continue;
        }

        const selectedBike = bikeSelector.value;

        if (selectedBike && bikeData[selectedBike]) {
            const bike = bikeData[selectedBike];
            imgElement.src = bike.imgSrc || "";
            specsElement.innerHTML = bike.specs.map(spec =>
                `<div class="spec-item ${spec.class}">${spec.name}</div>`
            ).join("") || "<div>No specs available</div>";
        } else {
            imgElement.src = "";
            specsElement.innerHTML = "<div>Please select a bike</div>";
        }
    }
}

// Simulated function to fetch bike data
async function fetchBikeData(bike) {
    // Simulate fetching data from an API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bikeData[bike]) {
                resolve(bikeData[bike]);
            } else {
                reject(new Error(`Bike data not found for ${bike}`));
            }
        }, 10); // Simulate network delay
    });
}

// Event listener for bike selection
document.querySelectorAll('.bike-selector').forEach(selector => {
    selector.addEventListener('change', async (event) => {
        const selectedValue = event.target.value;
        const cardElement = event.target.closest('.product-card');
        const imgElement = cardElement ? cardElement.querySelector('img') : null;
        const specsElement = cardElement ? cardElement.querySelector('.specs') : null;

        if (!imgElement || !specsElement) {
            console.error("Image or specs element missing in card.");
            return;
        }

        try {
            const bike = await fetchBikeData(selectedValue);
            imgElement.src = bike.imgSrc || "";
            specsElement.innerHTML = bike.specs.map(spec =>
                `<div class="spec-item ${spec.class}">${spec.name}</div>`
            ).join("") || "<div>No specs available</div>";
        } catch (error) {
            console.error(error.message);
            imgElement.src = "";
            specsElement.innerHTML = "<div>Error loading bike data</div>";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("VersusHub Bikes loaded successfully");
});