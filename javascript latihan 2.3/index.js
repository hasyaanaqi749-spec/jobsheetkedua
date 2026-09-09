const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Monitor", price: 300, category: "monitors", stock: 7 },
    { id: 5, title: "Keyboard", price: 50, category: "accessories", stock: 10 },
    { id: 6, title: "Mouse", price: 25, category: "accessories", stock: 20 },
    { id: 7, title: "Tablet", price: 400, category: "tablets", stock: 8 },
    { id: 8, title: "Smartwatch", price: 200, category: "wearables", stock: 12 },
    { id: 9, title: "Printer", price: 150, category: "printers", stock: 4 },
    { id: 10, title: "Webcam", price: 80, category: "accessories", stock: 6 },
    { id: 11, title: "External Hard Drive", price: 120, category: "storage", stock: 9 },
    { id: 12, title: "Router", price: 90, category: "networking", stock: 11 },
    { id: 13, title: "Graphics Card", price: 500, category: "components", stock: 2 },
    { id: 14, title: "Motherboard", price: 250, category: "components", stock: 5 },
    { id: 15, title: "RAM", price: 80, category: "components", stock: 14 },
    { id: 16, title: "Power Supply", price: 100, category: "components", stock: 6 },
    { id: 17, title: "Cooling Fan", price: 30, category: "components", stock: 10 },
    { id: 18, title: "SSD", price: 150, category: "storage", stock: 7 },
    { id: 19, title: "Gaming Chair", price: 250, category: "furniture", stock: 3 },
    { id: 20, title: "Desk Lamp", price: 40, category: "furniture", stock: 15 },
    { id: 21, title: "Bluetooth Speaker", price: 60, category: "audio", stock: 8 },
    { id: 22, title: "VR Headset", price: 400, category: "gaming", stock: 4 },
    { id: 23, title: "Action Camera", price: 300, category: "cameras", stock: 5 },
    { id: 24, title: "Drone", price: 600, category: "drones", stock: 2 },
    { id: 25, title: "Fitness Tracker", price: 100, category: "wearables", stock: 10 },
    { id: 26, title: "E-Reader", price: 120, category: "tablets", stock: 6 },
    { id: 27, title: "Smart Light Bulb", price: 30, category: "smart home", stock: 20 },
    { id: 28, title: "Smart Thermostat", price: 200, category: "smart home", stock: 4 },
    { id: 29, title: "Security Camera", price: 150, category: "smart home", stock: 7 },
    { id: 30, title: "Smart Door Lock", price: 180, category: "smart home", stock: 5 }
];

function updateStock(products, id, newStock) {
  return products.map(p => p.id === id ? { ...p, stock: newStock } : p);
}

const updatedProducts = updateStock(products, 1, 20);

console.log("Stok Baru ID 1:p;;", updatedProducts[0].stock);
console.log("Stok Asli ID 1:", products[0].stock);