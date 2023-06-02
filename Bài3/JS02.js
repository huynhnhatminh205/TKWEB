// Hàm xử lý giá trị lớn nhất
function timGiaTriLonNhat(so) {
    let max = so[0];
    
    for(let i = 0; i < so.length; i++) {
        if(max < so[i]) {
            max = so[i]
        }
    }

    return max;
}

// Xuất kết quả
console.log(timGiaTriLonNhat([9, 8, 6, 4, 100,  2, 8, 12, 23])); // Kết quả: 9
