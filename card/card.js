// Khởi tạo biến id toàn cục để theo dõi id tự động tăng
let currentId = 1;

// Định nghĩa lớp Product
class Product {
    // Khởi tạo constructor
    constructor(id, nameCard, imageCard, brandCard, priceCard, descriptionCard) {
        this.id = id;
        this.nameCard = nameCard;
        this.imageCard = imageCard;
        this.brandCard = brandCard;
        this.priceCard = priceCard;
        this.descriptionCard = descriptionCard;
    }
}

// Tạo mảng lưu trữ các sản phẩm
let productsCard = [
    {
        id: currentId++,
        nameCard: "Card màn hình GIGABYTE AORUS GeForce RTX 4070 SUPER MASTER 12G",
        imageCard: "https://product.hstatic.net/200000722513/product/aorus_geforce_rtx__4070_super_master_12g-01_0e09611fdf6640f4bc03e6baf434b2a3_1024x1024.png",
        brandCard: "GIGABYTE",
        priceCard: 23000000,
        descriptionCard: "Card chuyên chơi mọi game, chỉnh sửa đồ họa "
    },
    {
        id: currentId++,
        nameCard: "Card màn hình ASUS ProArt GeForce RTX 4060 Ti 16GB GDDR6",
        imageCard: "https://product.hstatic.net/200000722513/product/fwebp__9__f6b66318b6244c84a3fa0a1c0ed12892_1024x1024.png",
        brandCard: "ASUS ",
        priceCard: 14890000,
        descriptionCard: "Card chuyên chơi game"
    },
    {
        id: currentId++,
        nameCard: "Card màn hình MSI GeForce RTX 4060 Ti GAMING X SLIM WHITE 8G",
        imageCard: "https://product.hstatic.net/200000722513/product/1024_85f2a18f1df34c9283f75345c9c57d98_1024x1024.png",
        brandCard: "MSI",
        priceCard: 13990000,
        descriptionCard: "Card chuyên chơi game"
    }
];

// Hiển thị sản phẩm
function display(productsCard) {
    let result = "<table border='1' cellspacing='0'>";
    result += "<tr><th>ID</th><th>Tên sản phẩm</th><th>Ảnh</th><th>Hãng</th><th>Giá</th><th>Mô tả</th><th>Sửa</th><th>Xóa</th></tr>";
    for (let i = 0; i < productsCard.length; i++) {
        result += "<tr>";
        result += `<td>${productsCard[i].id}</td>`;
        result += `<td>${productsCard[i].nameCard}</td>`;
        result += `<td><img src="${productsCard[i].imageCard}" alt="${productsCard[i].nameCard}"></td>`;
        result += `<td>${productsCard[i].brandCard}</td>`;
        result += `<td>${productsCard[i].priceCard} VNĐ</td>`;
        result += `<td>${productsCard[i].descriptionCard}</td>`;
        result += `<td><button>Sửa</button></td>`;
        result += `<td><button style='background-color: red;' onclick="deleteProduct(${i})">Xóa</button></td>`;
        result += "</tr>";
    }
    result += "</table>";
    document.getElementById("result").innerHTML = result;
}

// Thêm sản phẩm vào mảng
document.getElementById("add").addEventListener("click", function () {
    // Lấy dữ liệu từ các ô nhập vào
    let productNameCard = document.getElementById("productNameCard").value;
    let productImageCard = document.getElementById("productImageCard").value;
    let productBrandCard = document.getElementById("productBrandCard").value;
    let productPriceCard = document.getElementById("productPriceCard").value;
    let productDescriptionCard = document.getElementById("productDescriptionCard").value;

    // Kiểm tra dữ liệu đầu vào
    if (productNameCard && productImageCard && productBrandCard && productPriceCard && productDescriptionCard) {
        // Tạo đối tượng Product mới với id tự động tăng và thêm vào danh sách mảng productsCard
        let newProduct = new Product(currentId++, productNameCard, productImageCard, productBrandCard, productPriceCard, productDescriptionCard);
        productsCard.push(newProduct);

        // Hiển thị lại danh sách sản phẩm
        display(productsCard);

        // Thông báo cho người dùng
        alert("Thêm sản phẩm thành công");

        // Xóa các ô nhập liệu sau khi thêm sản phẩm
        document.getElementById("productNameCard").value = "";
        document.getElementById("productImageCard").value = "";
        document.getElementById("productBrandCard").value = "";
        document.getElementById("productPriceCard").value = "";
        document.getElementById("productDescriptionCard").value = "";
    } else {
        alert("Vui lòng nhập đủ thông tin sản phẩm");
    }
});

// Xóa sản phẩm khỏi mảng
function deleteProduct(i) {
    let isDelete = confirm(`Bạn có chắc muốn xóa sản phẩm ${productsCard[i].nameCard}?`);
    if (isDelete) {
        productsCard.splice(i, 1); // Xóa sản phẩm khỏi mảng
        display(productsCard); // Hiển thị lại danh sách sản phẩm sau khi xóa
        alert("Xóa thành công");
    }
}

// Tìm kiếm sản phẩm
document.getElementById("search").addEventListener("click", function () {
    let productCardSearch = document.getElementById("productCardSearch").value.toLowerCase();

    // Kiểm tra nếu ô tìm kiếm rỗng
    if (!productCardSearch) {
        alert("Vui lòng nhập tên sản phẩm để tìm kiếm");
        return;
    }

    // Tìm kiếm sản phẩm trong mảng
    let result = productsCard.filter(product =>
        product.nameCard.toLowerCase().includes(productCardSearch)
    );

    // Kiểm tra kết quả tìm kiếm
    if (result.length === 0) {
        alert("Không tìm thấy sản phẩm nào.");
    } else {
        display(result); // Hiển thị kết quả tìm kiếm
    }
});

// Hiển thị sản phẩm ban đầu (nếu có)
display(productsCard);
