// data for laptops
const laptopData = {
    macbookair: {
        name: "Macbook Air M2",
        imgSrc: "https://www.reliancedigital.in/medias/Apple-MLY33HN-A-Laptop-492850656-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5OTE3OXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDMxLzk4NTA5NDkxNzMyNzguanBnfGM5NWY2ZmFmNGU0NjA1NDJhMDNkMmM1ZTQyYWY0NGQ1NGY5YTYxY2JlM2Q4MWYzZDRiODQyM2NhNTMxOGQ5MWU",
        specs: [
            { name: "Name: Macbook Air M2", class: "blue" },
            { name: "Display: 13.6-inch Retina", class: "blue" },
            { name: "Processor: M2 chip", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 18 hours", class: "blue" },
            { name: "GPU: Integrated 10-core GPU", class: "blue" },
            { name: "Price: ₹107,817", class: "red" }
        ]
    },
    samsungnotebook: {
        name: "Galaxy Book 4",
        imgSrc: "https://www.reliancedigital.in/medias/Samsung-Galaxy-Book4-Pro-494352559-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODMwMzB8aW1hZ2UvanBlZ3xpbWFnZXMvaDY4L2gwMS8xMDExMjg2MjA2MDU3NC5qcGd8ZDNhODU5MDMyYTMwZjE5NTI3NGFkZmYwZjhiYzQzNDQ2ODk4MzQwNmUyMjRmM2MxYmE1NGUyOTJmN2U3ZDg4MA",
        specs: [
            { name: "Name: Galaxy Book 4", class: "blue" },
            { name: "Display: 15.6-inch", class: "blue" },
            { name: "Processor: Intel Core i7", class: "blue" },
            { name: "Memory: 16GB RAM", class: "blue" },
            { name: "Battery Life: 10 hours", class: "blue" },
            { name: "GPU: Intel Iris Xe Graphics", class: "blue" },
            { name: "Price: ₹82,917", class: "red" }
        ]
    },
    asusvivobook: {
        name: "Asus Vivobook 16",
        imgSrc: "https://www.reliancedigital.in/medias/Asus-Vivobook16-Laptop-494353034-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NjM3NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2g1Ny8xMDEzMDAwMTgyMTcyNi5qcGd8MGQ2NmVhMTgzYTlkZThiYTI5NzE1YWMzZjlhY2E5MWMwYWU5NDI5MGU5N2JiMTM5NTUzNGE5Y2M4N2U5YTgwYQ",
        specs: [
            { name: "Name: Asus Vivobook 16", class: "blue" },
            { name: "Display: 16.0-inch", class: "blue" },
            { name: "Processor: AMD Ryzen 5", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 12 hours", class: "blue" },
            { name: "GPU: AMD Radeon Vega Graphics", class: "blue" },
            { name: "Price: ₹70,467", class: "red" }
        ]
    },
    microsoftsurface: {
        name: "Microsoft Surface X Elite",
        imgSrc: "https://www.reliancedigital.in/medias/Microsoft-Surface-Laptop-494422079-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjQ4MTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDkxL2g4Ny8xMDIwMDQ0MjczMjU3NC5qcGd8YzM1MWQ0NGJlZDE1MjI1OTg0YTlkYzAwYTE1Yjc0YTFlZDY3ZTVkMTVmMDAwMWZhMjBiODIwNDAzYzVlNDZhYw",
        specs: [
            { name: "Name: Microsoft Surface X Elite", class: "blue" },
            { name: "Display: 14.0-inch", class: "blue" },
            { name: "Processor: Qualcomm Snapdragon X Elite", class: "blue" },
            { name: "Memory: 16GB RAM", class: "blue" },
            { name: "Battery Life: 10 hours", class: "blue" },
            { name: "GPU: Integrated Adreno GPU", class: "blue" },
            { name: "Price: ₹124,467", class: "red" }
        ]
    },
    lenovoideapad5: {
        name: "Lenovo IdeaPad Duet 5",
        imgSrc: "https://www.reliancedigital.in/medias/Lenovo-Ideapad-Slim5-82XF003FIN-493838770-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTE3Mzh8aW1hZ2UvanBlZ3xpbWFnZXMvaDY5L2hiZi8xMDAzNTQxODEwMzgzOC5qcGd8ZTZjNDQ0ZTk1ZTkwZGZmZjUyODUxOTFkNjY0Zjk3ZWYwYjM2NGMzODgwN2ZjMTRjOWJlMmZhN2ZiYTJjMjk1ZA",
        specs: [
            { name: "Name: Lenovo IdeaPad Duet 5", class: "blue" },
            { name: "Display: 13.3-inch", class: "blue" },
            { name: "Processor: Qualcomm Snapdragon 7 Gen2", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 16 hours", class: "blue" },
            { name: "GPU: Integrated Adreno GPU", class: "blue" },
            { name: "Price: ₹45,617", class: "red" }
        ]
    },
    macbookairm3: {
        name: "Macbook Air M3",
        imgSrc: "https://www.reliancedigital.in/medias/Macbook-Midnight-Black-Laptop-494352774-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MTc0NXxpbWFnZS9qcGVnfGltYWdlcy9oYmMvaGRiLzEwMTE2OTkzMjUzNDA2LmpwZ3w2NDQ2ZjMwM2JmMmQ4MjAxNTFlMjllOGQxZDY2YjRhOGJkYzAyMDY2NWE1N2IzNDNmNmE4YzVlODMzY2E4ZjJj",
        specs: [
            { name: "Name: Macbook Air M3", class: "blue" },
            { name: "Display: 13.6-inch", class: "blue" },
            { name: "Processor: M3 Chip", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 14 hours", class: "blue" },
            { name: "GPU: Integrated 10-core GPU", class: "blue" },
            { name: "Price: ₹91,017", class: "red" }
        ]
    },
    dellxps13: {
        name: "Dell XPS 13",
        imgSrc: "https://www.reliancedigital.in/medias/Dell-XPS-9345-Laptop-494422131-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDMxNTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2hlZC8xMDE3NjgwNjEyNTU5OC5qcGd8YWI2ZDczOWI2YjlkNTBhNDJkNjVmYmQwYmQwMzViNDhmZThlOWRmMTdmYTc0OTQwMjNkYTJmMjQzNDBiMWVjNA",
        specs: [
            { name: "Name: Dell XPS 13", class: "blue" },
            { name: "Display: 13.4-inch", class: "blue" },
            { name: "Processor: Qualcomm Snapdragon X Elite", class: "blue" },
            { name: "Memory: 16GB RAM", class: "blue" },
            { name: "Battery Life: 17 hours", class: "blue" },
            { name: "Graphics: Integrated Adreno GPU", class: "blue" },
            { name: "Price: ₹116,217", class: "red" }
        ]
    },
    aceraspire5: {
        name: "Acer Aspire 5",
        imgSrc: "https://www.reliancedigital.in/medias/Acer-Aspire-Lite-11th-Gen-Intel-Core-i7-Laptop-493839149-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NDczNDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ3L2hhMy8xMDA1MDU1NzY3MzUwMi5qcGd8ZDg0OTRiY2UxZGYzNTBhYzIxMzdkYzdjMjhjYTcwOTE4MThiYzJiZWRmZGIyNzc3ZjQwMmJmZjU2MmY0M2U3Yw",
        specs: [
            { name: "Name: Acer Aspire 5", class: "blue" },
            { name: "Display: 14.0-inch", class: "blue" },
            { name: "Processor: Intel Core i5", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 6 hours", class: "blue" },
            { name: "Graphics: Intel Iris Xe", class: "blue" },
            { name: "Price: ₹41,749", class: "red" }
        ]
    },
    acerchromebookplus515: {
        name: "Acer Chromebook Plus 515",
        imgSrc: "https://www.reliancedigital.in/medias/Acer-Aspire-ALG-Laptop-494421620-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MDU3Njl8aW1hZ2UvanBlZ3xpbWFnZXMvaDFlL2gwOC8xMDE3MTA0MjMzMjcwMi5qcGd8NTk0ZDFkMGRjZGJiMGQyMWU2ZjUxMDE3NWNjNjNmYjAxNDI5NGQzNWUzMjkwZTFkZjZmNTVlM2U2ZGU4MTZlMg",
        specs: [
            { name: "Name: Acer Chromebook Plus 515", class: "blue" },
            { name: "Display: 15.6-inch", class: "blue" },
            { name: "Processor: Intel Core i3", class: "blue" },
            { name: "Memory: 8GB RAM", class: "blue" },
            { name: "Battery Life: 5 hours", class: "blue" },
            { name: "Graphics: Intel UHD Graphics", class: "blue" },
            { name: "Price: ₹37,749", class: "red" }
        ]
    },
    macbookprom3: {
        name: "Macbook Pro M3",
        imgSrc: "https://www.reliancedigital.in/medias/Apple-MRW23HNA-MacBook-Pro-494268251-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTY5NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGJmL2hkZS8xMDA3NDAxMDMyMDkyNi5qcGd8ZWI2OWQ3YmI4ZGU3ODk1OTU2NTcyYjFmZGIwZGQxNTY5NThkYjBlOWVhNjc5Y2ViNDYxNjM2NDU3ZDdjYmMwMQ",
        specs: [
            { name: "Name: Macbook Pro M3", class: "blue" },
            { name: "Display: 16.0-inch", class: "blue" },
            { name: "Processor: Intel Core i3", class: "blue" },
            { name: "Memory: 18GB RAM", class: "blue" },
            { name: "Battery Life: 24 hours", class: "blue" },
            { name: "Graphics: Integrated Apple GPU", class: "blue" },
            { name: "Price: ₹215,453.67", class: "red" }
        ]
    },
    dellxps17: {
        name: "Dell XPS 17",
        imgSrc: "https://www.reliancedigital.in/medias/Dell-XPS-9640-Laptop-494492893-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTg1MzF8aW1hZ2UvanBlZ3xpbWFnZXMvaGVmL2gwYS8xMDE5ODYxMjExNTQ4Ni5qcGd8ZDBmZjJlZmI5ZjA0ZjJlMWMxMDc2Y2U1MTlkMGFiYjMwOGUwMTcyODY0NmUxNGY3ZTU2MmRmMjE2ZTgwZDQ4MA",
        specs: [
            { name: "Name: Dell XPS 17", class: "blue" },
            { name: "Display: 17.0-inch", class: "blue" },
            { name: "Processor: Intel Core i9", class: "blue" },
            { name: "Memory: 32GB RAM", class: "blue" },
            { name: "Battery Life: 9 hours", class: "blue" },
            { name: "Graphics: NVIDIA GeForce RTX 4060", class: "blue" },
            { name: "Price: ₹145,267.00", class: "red" }
        ]
    },
    msikatana15: {
        name: "MSI Katana 15",
        imgSrc: "https://www.reliancedigital.in/medias/MSI-070IN-Cyborg-493838687-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MjUzMXxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaGYxLzEwMDM0ODIxMDM4MTEwLmpwZ3xkYWZhMmZlNTExYjE4ZDk0YTg2N2ExNTc5ZGRkNTg2NGU3YjI2NmRlZjlhYTExODQyNDA3M2VjMTE3ZTA0ZjY3",
        specs: [
            { name: "Name: MSI Katana 15", class: "blue" },
            { name: "Display: 15.6-inch", class: "blue" },
            { name: "Processor: Intel Core i7", class: "blue" },
            { name: "Memory: 16GB RAM", class: "blue" },
            { name: "Battery Life: 3.5 hours", class: "blue" },
            { name: "Graphics: NVIDIA GeForce RTX 3060", class: "blue" },
            { name: "Price: ₹95,267.00", class: "red" }
        ]
    },
    asustufgamingf15: {
        name: "Asus TUF Gaming F15",
        imgSrc: "https://www.reliancedigital.in/medias/Asus-FX506HF-HN025W-Laptop-494352509-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MTcwODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDE0L2gxYi8xMDEyMDAxMTI4NDUxMC5qcGd8ZGEyZDY2YmRhMmY3YmZjYWM2MWM1MGY5NjRjOWU0YjJlYjJkY2MwMDM0MDYyMTZiYzUyNzkzODFhZWY4MTljNw",
        specs: [
            { name: "Name: Asus TUF Gaming F15", class: "blue" },
            { name: "Display: 15.6-inch", class: "blue" },
            { name: "Processor: Intel Core i9 13900H", class: "blue" },
            { name: "Memory: 16GB RAM", class: "blue" },
            { name: "Battery Life: 3.5 hours", class: "blue" },
            { name: "Graphics: NVIDIA GeForce RTX 4060", class: "blue" },
            { name: "Price: ₹78,767.00", class: "red" }
        ]
    },
    macbookprom2max: {
        name: "Macbook Pro M2 Max",
        imgSrc: "https://www.reliancedigital.in/medias/Apple-MPHG3HN-A-Laptop-493664955-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1OTgwOXxpbWFnZS9qcGVnfGltYWdlcy9oYmUvaGRmLzk5NTAxNzY5MzU5NjYuanBnfDgxMWNjMmE0YTFlYjA2NTI5Nzk2NDVlNGU5Y2FkYmZkMmZiY2VjNDgwZDQ5MDNlNzhmYTBjYTA2Yjk0NGZjNmM",
        specs: [
            { name: "Name: Macbook Pro M2 Max", class: "blue" },
            { name: "Display: 16.0-inch", class: "blue" },
            { name: "Processor: M2 Max Chip", class: "blue" },
            { name: "Memory: 24GB RAM", class: "blue" },
            { name: "Battery Life: 27 hours", class: "blue" },
            { name: "Graphics: Integrated Apple GPU", class: "blue" },
            { name: "Price: ₹207,267.00", class: "red" }
        ]
    },
    acerswift3oled: {
        name: "Acer Swift 3 OLED",
        imgSrc: "https://www.reliancedigital.in/medias/Acer-Aspire-ALG-Laptop-494421620-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MDU3Njl8aW1hZ2UvanBlZ3xpbWFnZXMvaDFlL2gwOC8xMDE3MTA0MjMzMjcwMi5qcGd8NTk0ZDFkMGRjZGJiMGQyMWU2ZjUxMDE3NWNjNjNmYjAxNDI5NGQzNWUzMjkwZTFkZjZmNTVlM2U2ZGU4MTZlMg",
        specs: [
            { name: "Name: Acer Swift 3 OLED", class: "blue" },
            { name: "Display: 14.0-inch", class: "blue" },
            { name: "Processor: Intel Core i5 12500H", class: "blue" },
            { name: "Memory: 16GB LPDDR5 RAM", class: "blue" },
            { name: "Battery Life: 11 hours", class: "blue" },
            { name: "Graphics: Intel Iris Xe", class: "blue" },
            { name: "Price: ₹66,317.00", class: "red" }
        ]
    },
    lenovoyogabook9i: {
        name: "Lenovo Yoga Book 9i",
        imgSrc: "https://www.reliancedigital.in/medias/Lenovo-Yoga9-83B1004XIN-493838696-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDg0OTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDllL2gzNC8xMDAzNTY0Njk1NTU1MC5qcGd8YzYxMTNiZTY1MWRiYTQ2ZjYzYjk0NzZmZTk2YmY0Yjk2OTczOWJmOTIyNGNjMzcxNDdjYmM0OTQzMjNiZGZlYw",
        specs: [
            { name: "Name: Lenovo Yoga Book 9i", class: "blue" },
            { name: "Display: 14.0-inch", class: "blue" },
            { name: "Processor: Intel Core i7-1360P", class: "blue" },
            { name: "Memory: 16GB LPDDR5 RAM", class: "blue" },
            { name: "Battery Life: 10 hours", class: "blue" },
            { name: "Graphics: Intel Iris Xe", class: "blue" },
            { name: "Price: ₹74,617.00", class: "red" }
        ]
    },
    asuszenbook17: {
        name: "Asus Zenbook 17",
        imgSrc: "https://www.reliancedigital.in/medias/Asus-Zenbook14-Evo-Laptop-494352119-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjQ1MzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2gwNy8xMDEwMDA2MDAyODk1OC5qcGd8ZDEzYzNhYzlkOWMzZDk4ODc0Mjc3NjgwZjI4ZTc0NDEzYjBhNmM5Y2VhM2ZmZjEwYmM4YTc0OWU2NmMyNjIzZQ",
        specs: [
            { name: "Name: Asus Zenbook 17", class: "blue" },
            { name: "Display: 17.0-inch", class: "blue" },
            { name: "Processor: Intel Core i7-12900H", class: "blue" },
            { name: "Memory: 16GB LPDDR5 RAM", class: "blue" },
            { name: "Battery Life: 12 hours", class: "blue" },
            { name: "Graphics: NVIDIA GeForce RTX 3050", class: "blue" },
            { name: "Price: ₹91,267.00", class: "red" }
        ]
    },
    msigt77titan: {
        name: "MSI GT77 Titan",
        imgSrc: "https://www.reliancedigital.in/medias/MSI-071IN-Cyborg-493838688-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MjUzMXxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDBiLzEwMDM0ODE3NzYxMzEwLmpwZ3wxOTg2OTViZmQ1M2I1MTY1NmI5YzdjMWFlZGM1NjU4OWZmZTQxZGUzODgzZjVkODU3ZjQ5MTU5YWY0NjkyM2Fj",
        specs: [
            { name: "Name: MSI GT77 Titan", class: "blue" },
            { name: "Display: 17.0-inch", class: "blue" },
            { name: "Processor: Intel Core i9-13900K", class: "blue" },
            { name: "Memory: 64GB LPDDR5 RAM", class: "blue" },
            { name: "Battery Life: 12 hours", class: "blue" },
            { name: "Graphics: NVIDIA GeForce RTX 4090", class: "blue" },
            { name: "Price: ₹431,067.00", class: "red" }
        ]
    },
};

// Function to update the comparison based on user selection
function updateComparison() {
    for (let i = 1; i <= 3; i++) {
        const selectedLaptop = document.getElementById(`laptop${i}`).value;
        const imgElement = document.getElementById(`image${i}`);
        const specsElement = document.getElementById(`specs${i}`);

        if (selectedLaptop) {
            const laptop = LaptopData[selectedLaptop]; // Fetch the laptop data asynchronously
            imgElement.src = laptop.imgSrc;
            specsElement.innerHTML = laptop.specs.map(
                spec => `<div class="spec-item ${spec.class}">${spec.name}</div>`
            ).join("");
        } else {
            // Clear image and specs if no laptop is selected
            imgElement.src = "=";
            specsElement.innerHTML = "";
        }
    }
}

// Example of how to fetch data from an API (simulated here)
async function fetchLaptopData(laptop) {
    // Simulate fetching data from an API
    // In a real application, you might use fetch() to get data from an actual endpoint.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(laptopData[laptop]);
        }, 10); // Simulate network delay
    });
}

// Event listener to automatically fetch and update data when a laptop is selected
document.querySelectorAll('.laptop-selector').forEach(selector => {
    selector.addEventListener('change', async (event) => {
        const selectedValue = event.target.value;
        const laptopData = await fetchLaptopData(selectedValue);
        const imgElement = event.target.closest('.product-card').querySelector('img');
        const specsElement = event.target.closest('.product-card').querySelector('.specs');

        if (laptopData) {
            imgElement.src = laptopData.imgSrc;
            specsElement.innerHTML = laptopData.specs.map(
                spec => `<div class="spec-item ${spec.class}">${spec.name}</div>`
            ).join("");
        } else {
            imgElement.src = "";
            specsElement.innerHTML = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("VersusHub loaded");
});
