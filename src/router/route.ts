import { Router } from "express"

class ApiRoute {
  constructor() {
    this.route = this.route.bind(this)
  }

  route() {
    const router = Router()
    router.get('/bank', (req, res) => {
      res.json([
        {
            "id": "PE0100",
            "name": "Công ty điện lực Sài Gòn",
            "diachi": "01 Võ Văn Tần P6 Quận 3",
            "donViThuHuong": "CN Tổng công ty Điện lực TP.HCM TNHH – Công ty Điện lực Sài Gòn",
            "khuvuc": "Quận 1 và Quận 3",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP Ngoại Thương Việt Nam – Chi nhánh TP. HCM",
                    "soTaiKhoan": "1036112345"
                }
            ]
        },
        {
            "id": "PE0200",
            "name": "Công ty điện lực Phú Thọ",
            "diachi": "215 Lý Thường Kiệt P.15 Q.11",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Phú Thọ",
            "khuvuc": "Quận 10 và Quận 11",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP An Bình - PGD Chợ Lớn",
                    "soTaiKhoan": "0241001390004"
                }
            ]
        },
        {
            "id": "PE0300",
            "name": "Công ty điện lực Chợ Lớn",
            "diachi": "1A Thuận Kiều F.12 Q.5",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Chợ Lớn",
            "khuvuc": "Quận 5 và Quận 8",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP An Bình - PGD Chợ Lớn",
                    "soTaiKhoan": "0241000700007"
                }
            ]
        },
        {
            "id": "PE0400",
            "name": "Công ty điện lực Gia Định",
            "diachi": "81 Nguyễn Đình Chiểu P.4 Quận Phú Nhuận",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Gia Định",
            "khuvuc": "Quận Bình Thạnh và Quận Phú Nhuận",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP Sài Gòn Thương Tín - Chi nhánh Phú Nhuận",
                    "soTaiKhoan": "060294756399"
                }
            ]
        },
        {
            "id": "PE0500",
            "name": "Công ty điện lực Tân Thuận",
            "diachi": "62 Lê Quốc Hưng P.13 Q.4",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Tân Thuận",
            "khuvuc": "Quận 4 và Quận 7",
            "listNganHang": [
                {
                    "nganHang": "VIETCOMBANK - CHI NHÁNH THỦ THIÊM",
                    "soTaiKhoan": "1020.1021.02"
                }
            ]
        },
        {
            "id": "PE0600",
            "name": "Công ty điện lực Bình Phú",
            "diachi": "718 Kinh Dương Vương, Phường 13, Quận 6",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Bình Phú",
            "khuvuc": "Quận 6 và Quận Bình Tân",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP Ngoại Thương Việt Nam (VCB) - Chi nhánh Thủ Thiêm",
                    "soTaiKhoan": "1519199999"
                }
            ]
        },
        {
            "id": "PE0700",
            "name": "Công ty điện lực Tân Phú",
            "diachi": "42B Trần Hưng Đạo, P. Tân Sơn Nhì, Q.Tân Phú",
            "donViThuHuong": "CN TCT ĐL TPHCM TNHH - CT Điện lực Tân Phú",
            "khuvuc": "Quận Tân Phú",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP Phát triển TP. Hồ Chí Minh -CN Cộng Hòa - PGD Lê Trọng Tấn (Tên viết tắt: HDBank Lê Trọng Tấn)",
                    "soTaiKhoan": "087704071119999"
                }
            ]
        },
        {
            "id": "PE0800",
            "name": "Công ty điện lực Hóc Môn",
            "diachi": "68 Đỗ Văn Dậy, Xã Tân Hiệp, Hóc Môn",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Hóc Môn",
            "khuvuc": "Huyện Hóc Môn",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng An Bình - Phòng giao dịch Bắc Sài Gòn, TP.HCM",
                    "soTaiKhoan": "0271001946009"
                }
            ]
        },
        {
            "id": "PE0900",
            "name": "Công ty điện lực Củ Chi",
            "diachi": "396 Đường Quốc Lộ 22 ấp Tân Lập Xã Tân Thông Hội Huyện Củ Chi",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Củ Chi",
            "khuvuc": "Huyện Củ Chi",
            "listNganHang": [
                {
                    "nganHang": "Ngân Hàng NN&PTNT Huyện Củ Chi",
                    "soTaiKhoan": "6120201000296"
                },
                {
                    "nganHang": "Ngân Hàng TMCP Đông Á- PGD Củ Chi",
                    "soTaiKhoan": "002589330001"
                },
                {
                    "nganHang": "Kho Bạc Nhà Nước Huyện Củ Chi",
                    "soTaiKhoan": "37510900140300000"
                }
            ]
        },
        {
            "id": "PE1000",
            "name": "Công ty điện lực Thủ Đức",
            "diachi": "647 Tỉnh lộ 43 KP4 P. Tam Bình Quận Thủ Đức",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Thủ Đức",
            "khuvuc": "Thành phố Thủ Đức",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank) - CN Thủ Thiêm",
                    "soTaiKhoan": "1234567997"
                },
                {
                    "nganHang": "Kho Bạc Nhà Nước Thủ Đức",
                    "soTaiKhoan": "37510907158800000"
                },
                {
                    "nganHang": "Ngân hàng TMCP An Bình (ABB) – CN HCM\n(Lưu ý: Tài khoản sẽ ngừng hoạt động từ ngày 01/10/2023.)",
                    "soTaiKhoan": "0301000598003"
                },
                {
                    "nganHang": "Ngân hàng Đầu tư và phát triển (BIDV) – CN Đông Sài Gòn Tp.HCM\n(Lưu ý: Tài khoản sẽ ngừng hoạt động từ ngày 01/10/2023.)",
                    "soTaiKhoan": "31410002170915"
                }
            ]
        },
        {
            "id": "PE1100",
            "name": "Công ty điện lực Duyên Hải",
            "diachi": "393 Nguyễn Bình, X.Nhơn Đức, H.Nhà Bè",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Duyên Hải",
            "khuvuc": "Huyện Nhà Bè và Huyện Cần Giờ",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank) - Chi nhánh Tân Sài Gòn – Phòng Giao dịch Hiệp Phước",
                    "soTaiKhoan": "6667797979"
                }
            ]
        },
        {
            "id": "PE1300",
            "name": "Công ty điện lực Gò Vấp",
            "diachi": "368 Nguyễn Văn Lượng P.16 Q. Vò Vấp",
            "donViThuHuong": "CN TCT DL TPHCM TNHH-CTY DIEN LUC GO VAP",
            "khuvuc": "Quận Gò Vấp",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP Ngoại thương Việt Nam - Chi nhánh Thủ Thiêm",
                    "soTaiKhoan": "1518188888"
                }
            ]
        },
        {
            "id": "PE1400",
            "name": "Công ty điện lực Tân Bình",
            "diachi": "117 Phổ Quang P.02 Quận Tân Bình",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Tân Bình",
            "khuvuc": "Quận Tân Bình",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP Quốc tế Việt Nam",
                    "soTaiKhoan": "601704061188888"
                }
            ]
        },
        {
            "id": "PE1500",
            "name": "Công ty điện lực Bình Chánh",
            "diachi": "D15/10C Thế Lữ, Tân Kiên, Bình Chánh",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực Bình Chánh",
            "khuvuc": "Huyện Bình Chánh",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam - Chi nhánh Bắc Thành phố Hồ Chí Minh",
                    "soTaiKhoan": "6421201545454"
                }
            ]
        },
        {
            "id": "PE1600",
            "name": "Công ty điện lực An Phú Đông",
            "diachi": "246 Tô Ký Phường Tân Chánh Hiệp Quận 12",
            "donViThuHuong": "Chi nhánh Tổng công ty điện lực Thành Phố Hồ Chí Minh TNHH - Công ty điện lực An Phú Đông",
            "khuvuc": "Quận 12",
            "listNganHang": [
                {
                    "nganHang": "Ngân hàng TMCP An Bình - Phòng giao dịch Bắc Sài Gòn, TP.HCM",
                    "soTaiKhoan": "0271005466001"
                }
            ]
        }
    ])
    })
    return router
  }
}

export default new ApiRoute()
