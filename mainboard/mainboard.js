// Định nghĩa lớp Product
class Product {
    constructor(nameMainBoard, imageMainBoard, brandMainBoard, priceMainBoard, descriptionMainBoard) {
        this.nameMainBoard = nameMainBoard;
        this.imageMainBoard = imageMainBoard;
        this.brandMainBoard = brandMainBoard;
        this.priceMainBoard = priceMainBoard;
        this.descriptionMainBoard = descriptionMainBoard;
    }
}

// Tạo mảng lưu trữ các sản phẩm
let productsMainBoard = [
    {
        nameMainBoard: "Bo mạch chủ ASUS TUF GAMING Z790-PLUS WIFI DDR5",
        imageMainBoard: "https://product.hstatic.net/200000722513/product/gearvn-bo-mach-chu-asus-tuf-gaming-z790-plus-wifi-ddr5-1_48b01fb3e6dc431d99de8d46c3f3e8aa_1024x1024.png",
        brandMainBoard: "ASUS",
        priceMainBoard: 7290000,
        descriptionMainBoard: "MainBoard chuyên chơi game"
    },
    {
        nameMainBoard: "Bo mạch chủ GIGABYTE X670 AORUS ELITE AX (DDR5)",
        imageMainBoard: "https://product.hstatic.net/200000722513/product/0001_c58e4676c44821517a795278c8156f32_842db5ac48d94e4f839b6114f507fc9a_c7b8d38f239d4217a58e6444bcef6ca3_1024x1024.jpg",
        brandMainBoard: "GIGABYTE",
        priceMainBoard: 8490000,
        descriptionMainBoard: "MainBoard chuyên chơi game"
    },
    {
        nameMainBoard: "Bo mạch chủ MSI MEG X870E GODLIKE (DDR5)",
        imageMainBoard: "https://product.hstatic.net/200000722513/product/msi-meg_x870e_godlike_3d2_rgb_942e3cfd6f3e4ef493a51f3a95a4e921_1024x1024.png",
        brandMainBoard: "MSI",
        priceMainBoard: 24990000,
        descriptionMainBoard: "MainBoard chuyên chơi game"
    }
];
// Hiển thị sản phẩm
function display(productsMainBoard) {
    let result = "<table border='1' cellspacing='0'>";
    result += "<tr><th>Tên sản phẩm</th><th>Ảnh</th><th>Hãng</th><th>Giá</th><th>Mô tả</th><th>Sửa</th><th>Xóa</th></tr>";
    for (let i = 0; i < productsMainBoard.length; i++) {
        result += "<tr>";
        result += `<td>${productsMainBoard[i].nameMainBoard}</td>`;
        result += `<td><img src="${productsMainBoard[i].imageMainBoard}" alt="${productsMainBoard[i].nameMainBoard}"></td>`;
        result += `<td>${productsMainBoard[i].brandMainBoard}</td>`;
        result += `<td>${productsMainBoard[i].priceMainBoard} VNĐ</td>`;
        result += `<td>${productsMainBoard[i].descriptionMainBoard}</td>`;
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
    let productNameMainBoard = document.getElementById("productNameMainBoard").value;
    let productImageMainBoard = document.getElementById("productImageMainBoard").value;
    let productBrandMainBoard = document.getElementById("productBrandMainBoard").value;
    let productPriceMainBoard = document.getElementById("productPriceMainBoard").value;
    let productDescriptionMainBoard = document.getElementById("productDescriptionMainBoard").value;

    // Kiểm tra dữ liệu đầu vào
    if (productNameMainBoard && productImageMainBoard && productBrandMainBoard && productPriceMainBoard && productDescriptionMainBoard) {
        // Tạo đối tượng Product mới và thêm vào danh sách mảng productsMainBoard
        let newProduct = new Product(productNameMainBoard, productImageMainBoard, productBrandMainBoard, productPriceMainBoard, productDescriptionMainBoard);
        productsMainBoard.push(newProduct);

        // Hiển thị lại danh sách sản phẩm
        display(productsMainBoard);

        // Thông báo cho người dùng
        alert("Thêm sản phẩm thành công");

        // Xóa các ô nhập liệu sau khi thêm sản phẩm
        document.getElementById("productNameMainBoard").value = "";
        document.getElementById("productImageMainBoard").value = "";
        document.getElementById("productBrandMainBoard").value = "";
        document.getElementById("productPriceMainBoard").value = "";
        document.getElementById("productDescriptionMainBoard").value = "";
    } else {
        alert("Vui lòng nhập đủ thông tin sản phẩm");
    }
});

// Xóa sản phẩm khỏi mảng
function deleteProduct(i) {
    let isDelete = confirm(`Bạn có chắc muốn xóa sản phẩm ${productsMainBoard[i].nameMainBoard}?`);
    if (isDelete) {
        productsMainBoard.splice(i, 1); // Xóa sản phẩm khỏi mảng
        display(productsMainBoard); // Hiển thị lại danh sách sản phẩm sau khi xóa
        alert("Xóa thành công");
    }
}

// Tìm kiếm sản phẩm
// Tìm kiếm sản phẩm
document.getElementById("search").addEventListener("click", function () {
    let productMainBoardSearch = document.getElementById("productMainBoardSearch").value.toLowerCase();

    // Kiểm tra nếu ô tìm kiếm rỗng
    if (!productMainBoardSearch) {
        alert("Vui lòng nhập tên sản phẩm để tìm kiếm");
        return;
    }

    // Tìm kiếm sản phẩm trong mảng
    let result = productsMainBoard.filter(product =>
        product.nameMainBoard.toLowerCase().includes(productMainBoardSearch) || product.brandMainBoard.toLowerCase().includes(productMainBoardSearch)
    );

    // Kiểm tra kết quả tìm kiếm
    if (result.length === 0) {
        alert("Không tìm thấy sản phẩm nào.");
    } else {
        display(result); // Hiển thị kết quả tìm kiếm
    }
});


// Hiển thị sản phẩm ban đầu (nếu có)
display(productsMainBoard);