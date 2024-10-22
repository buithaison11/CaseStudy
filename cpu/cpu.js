// Định nghĩa lớp Product
class Product {
    constructor(nameCpu, imageCpu, brandCpu, priceCpu, descriptionCpu) {
        this.nameCpu = nameCpu;
        this.imageCpu = imageCpu;
        this.brandCpu = brandCpu;
        this.priceCpu = priceCpu;
        this.descriptionCpu = descriptionCpu;
    }
}

// Tạo mảng lưu trữ các sản phẩm
let productsCpu = [
    {
        nameCpu: "Bộ vi xử lý Intel Core i9 14900F / Turbo up to 5.8GHz / 24 Nhân 32 Luồng / 36MB / LGA 1700",
        imageCpu: "https://product.hstatic.net/200000722513/product/n22386-001-rpl-i9f-fhs-univ_f3fb9b4467824b389c8d7def9db8fb8e_1024x1024.png",
        brandCpu: "Intel",
        priceCpu: 14990000,
        descriptionCpu: "Cpu intel chuyên chơi game"
    },
    {
        nameCpu: "Bộ vi xử lý Intel Core i9 10920X / 3.5GHz Turbo 4.6GHz / 12 Nhân 24 Luồng / 19.25MB / LGA 2066",
        imageCpu: "https://product.hstatic.net/200000722513/product/intel_i9_core-x_ae806d51436c4ed7a10492ccabffd0d9_272634753d2d4dbe9565e0a335806d6f_grande.jpg",
        brandCpu: "Intel",
        priceCpu: 19900000,
        descriptionCpu: "Cpu intel chuyên chơi game"
    },
    {
        nameCpu: "Bộ vi xử lý AMD Ryzen 9 7950X3D / 4.2GHz Boost 5.7GHz / 16 nhân 32 luồng / 144MB / AM5",
        imageCpu: "https://product.hstatic.net/200000722513/product/1404_f1d990ecc8dca59fe99135dc8416e89d_9b05a1ef25f040b5979fa23c8ab80bc9_05323a308ac9405c87ad3906a4bba1d6_1024x1024.jpg",
        brandCpu: "AMD",
        priceCpu: 18290000,
        descriptionCpu: "Cpu AMD chuyên chơi game"
    }
];
// Hiển thị sản phẩm
function display(productsCpu) {
    let result = "<table border='1' cellspacing='0'>";
    result += "<tr><th>Tên sản phẩm</th><th>Ảnh</th><th>Hãng</th><th>Giá</th><th>Mô tả</th><th>Sửa</th><th>Xóa</th></tr>";
    for (let i = 0; i < productsCpu.length; i++) {
        result += "<tr>";
        result += `<td>${productsCpu[i].nameCpu}</td>`;
        result += `<td><img src="${productsCpu[i].imageCpu}" alt="${productsCpu[i].nameCpu}"></td>`;
        result += `<td>${productsCpu[i].brandCpu}</td>`;
        result += `<td>${productsCpu[i].priceCpu} VNĐ</td>`;
        result += `<td>${productsCpu[i].descriptionCpu}</td>`;
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
    let productNameCpu = document.getElementById("productNameCpu").value;
    let productImageCpu = document.getElementById("productImageCpu").value;
    let productBrandCpu = document.getElementById("productBrandCpu").value;
    let productPriceCpu = document.getElementById("productPriceCpu").value;
    let productDescriptionCpu = document.getElementById("productDescriptionCpu").value;

    // Kiểm tra dữ liệu đầu vào
    if (productNameCpu && productImageCpu && productBrandCpu && productPriceCpu && productDescriptionCpu) {
        // Tạo đối tượng Product mới và thêm vào danh sách mảng productsCpu
        let newProduct = new Product(productNameCpu, productImageCpu, productBrandCpu, productPriceCpu, productDescriptionCpu);
        productsCpu.push(newProduct);

        // Hiển thị lại danh sách sản phẩm
        display(productsCpu);

        // Thông báo cho người dùng
        alert("Thêm sản phẩm thành công");

        // Xóa các ô nhập liệu sau khi thêm sản phẩm
        document.getElementById("productNameCpu").value = "";
        document.getElementById("productImageCpu").value = "";
        document.getElementById("productBrandCpu").value = "";
        document.getElementById("productPriceCpu").value = "";
        document.getElementById("productDescriptionCpu").value = "";
    } else {
        alert("Vui lòng nhập đủ thông tin sản phẩm");
    }
});

// Xóa sản phẩm khỏi mảng
function deleteProduct(i) {
    let isDelete = confirm(`Bạn có chắc muốn xóa sản phẩm ${productsCpu[i].nameCpu}?`);
    if (isDelete) {
        productsCpu.splice(i, 1); // Xóa sản phẩm khỏi mảng
        display(productsCpu); // Hiển thị lại danh sách sản phẩm sau khi xóa
        alert("Xóa thành công");
    }
}

// Tìm kiếm sản phẩm
// Tìm kiếm sản phẩm
document.getElementById("search").addEventListener("click", function () {
    let productCpuSearch = document.getElementById("productCpuSearch").value.toLowerCase();

    // Kiểm tra nếu ô tìm kiếm rỗng
    if (!productCpuSearch) {
        alert("Vui lòng nhập tên sản phẩm để tìm kiếm");
        return;
    }

    // Tìm kiếm sản phẩm trong mảng
    let result = productsCpu.filter(product =>
        product.nameCpu.toLowerCase().includes(productCpuSearch)
    );

    // Kiểm tra kết quả tìm kiếm
    if (result.length === 0) {
        alert("Không tìm thấy sản phẩm nào.");
    } else {
        display(result); // Hiển thị kết quả tìm kiếm
    }
});


// Hiển thị sản phẩm ban đầu (nếu có)
display(productsCpu);