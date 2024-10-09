// Đối tượng lưu trữ thông tin đăng ký phòng
let registrationInfo = {
    roomType: null,
    utilitiesCost: 0,
    totalCost: 0,
};

// Hàm để tính tổng chi phí dựa trên loại phòng
function calculateTotalCost() {
    let costPerRoom = 0;

    switch (registrationInfo.roomType) {
        case '2-person':
            costPerRoom = 1200000; // 1.2 triệu VND
            break;
        case '4-person':
            costPerRoom = 1000000; // 1 triệu VND
            break;
        case '6-person':
            costPerRoom = 600000; // 600 nghìn VND
            break;
        case '8-person':
            costPerRoom = 400000; // 400 nghìn VND
            break;
    }

    registrationInfo.totalCost = costPerRoom + registrationInfo.utilitiesCost;
    document.getElementById('totalCost').innerText = registrationInfo.totalCost.toLocaleString() + ' VND';
}

// Hàm để đăng ký phòng
function registerRoom() {
    const selectedRoom = document.querySelector('input[name="room"]:checked');
    if (selectedRoom) {
        registrationInfo.roomType = selectedRoom.value;
        calculateTotalCost();
        alert('Đăng ký phòng thành công!');
    } else {
        alert('Vui lòng chọn loại phòng trước khi đăng ký!');
    }
}

// Hàm để hủy đăng ký phòng
function cancelRegistration() {
    registrationInfo.roomType = null;
    registrationInfo.totalCost = 0;
    document.getElementById('totalCost').innerText = '0 VND';
    alert('Đã hủy đăng ký phòng thành công!');
}

// Hàm để thanh toán
function payForRoom() {
    if (registrationInfo.totalCost > 0) {
        alert('Thanh toán thành công với tổng số tiền: ' + registrationInfo.totalCost.toLocaleString() + ' VND');
        cancelRegistration(); // Hủy đăng ký sau khi thanh toán
    } else {
        alert('Bạn chưa đăng ký phòng nào để thanh toán!');
    }
}

// Thêm sự kiện cho các nút
document.getElementById('registerButton').addEventListener('click', registerRoom);
document.getElementById('cancelButton').addEventListener('click', cancelRegistration);
document.getElementById('payButton').addEventListener('click', payForRoom);
