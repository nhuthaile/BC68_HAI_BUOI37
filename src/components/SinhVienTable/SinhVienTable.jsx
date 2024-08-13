import React from "react";
import { useSelector } from "react-redux";

const SinhVienTable = () => {
  const selector = useSelector((state) => state.sinhvienSlice.sinhVien);
  console.log(selector);
  return (
    <div className="px-5">
      <table className="w-full mt-5 text-center ">
        <thead className="bg-black text-white ">
          <td>Mã SV</td>
          <td>Họ Tên</td>
          <td>Số Điện Thoại</td>
          <td>Email</td>
          <td>Chỉnh Sửa</td>
        </thead>
        {selector.map((val, key) => {
          return (
            <tr key={key} className="border ">
              <td>{val.maSinhVien}</td>
              <td>{val.hoTen}</td>
              <td>{val.phone}</td>
              <td>{val.email}</td>
              <td>
                <button className="bg-red-500 text-white px-5 py-1 rounded-md mr-3">
                  Xoá
                </button>
                <button className="bg-orange-500 text-white px-5 py-1 rounded-md">
                  Sửa
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SinhVienTable;
