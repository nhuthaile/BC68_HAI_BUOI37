import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { suaSinhVien, xoaSinhVien } from "../../redux/sinhvienSlice";

const SinhVienTable = () => {
  const selector = useSelector((state) => state.sinhvienSlice.sinhVien);
  // console.log(selector);
  const dispatch = useDispatch();
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
        {selector.map((sinhvien, key) => {
          return (
            <tr key={key} className="border ">
              <td>{sinhvien.maSinhVien}</td>
              <td>{sinhvien.hoTen}</td>
              <td>{sinhvien.phone}</td>
              <td>{sinhvien.email}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(xoaSinhVien(sinhvien.maSinhVien));
                  }}
                  className="bg-red-500 text-white px-5 py-1 rounded-md mr-3"
                >
                  Xoá
                </button>
                <button
                  onClick={() => dispatch(suaSinhVien(sinhvien))}
                  className="bg-orange-500 text-white px-5 py-1 rounded-md"
                >
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
