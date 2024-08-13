import React from "react";
import InputCustom from "../InputCustom/InputCustom";
import { useFormik } from "formik";
import * as yup from "yup";
import { validationNoti } from "../../common/validationNoti";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatSinhVien,
  suaSinhVien,
  themSinhVien,
} from "../../redux/sinhvienSlice";

const ThongTinSinhVien = () => {
  const dispatch = useDispatch();
  const suaInfo = useSelector((state) => state.sinhvienSlice.suaSinhVien);
  // console.log(suaInfo[0]);

  const formik = useFormik({
    initialValues: {
      maSinhVien: suaInfo[0] ? suaInfo[0].maSinhVien : "",
      hoTen: suaInfo[0] ? suaInfo[0].hoTen : "",
      phone: suaInfo[0] ? suaInfo[0].phone : "",
      email: suaInfo[0] ? suaInfo[0].email : "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(themSinhVien(values));
      formik.resetForm();
    },
    validationSchema: yup.object({
      maSinhVien: yup.string().required(validationNoti.empty),
      hoTen: yup.string().required(validationNoti.empty),
      phone: yup
        .string()
        .required(validationNoti.empty)
        .matches(
          /^(03[2-9]|05[6-9]|07[0|6-9]|08[1-9]|09[0-4|6-9])[0-9]{7}$/,
          "Số điện thoại chưa đúng định dạng"
        ),
      email: yup
        .string()
        .required(validationNoti.empty)
        .email("Chưa đúng định dạng email"),
    }),
  });
  return (
    <div className="">
      <form onSubmit={formik.handleSubmit} className="text-center">
        <div className="grid grid-cols-2 px-5 gap-3 text-left">
          <InputCustom
            labelContent={"Mã SV"}
            placeholder={"Vui lòng nhập mã sinh viên"}
            name={"maSinhVien"}
            touched={formik.touched.maSinhVien}
            onBlur={formik.handleBlur}
            error={formik.errors.maSinhVien}
            onChange={formik.handleChange}
            value={formik.values.maSinhVien}
          />
          <InputCustom
            labelContent={"Họ Tên"}
            placeholder={"Vui lòng nhập Họ Tên"}
            name={"hoTen"}
            touched={formik.touched.hoTen}
            onBlur={formik.handleBlur}
            error={formik.errors.hoTen}
            onChange={formik.handleChange}
            value={formik.values.hoTen}
          />
          <InputCustom
            labelContent={"Số Điện Thoại"}
            placeholder={"Vui lòng nhập số điện thoại"}
            name={"phone"}
            touched={formik.touched.phone}
            onBlur={formik.handleBlur}
            error={formik.errors.phone}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <InputCustom
            labelContent={"Email"}
            placeholder={"Vui lòng nhập email"}
            name={"email"}
            touched={formik.touched.email}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-3 rounded-md mt-5"
        >
          Thêm Sinh Viên
        </button>
        <button
          onClick={() => dispatch(capNhatSinhVien(formik.values))}
          className="bg-green-500 ml-5 text-white px-5 py-3 rounded-md mt-5"
        >
          Cập Nhật Thông Tin
        </button>
      </form>
    </div>
  );
};

export default ThongTinSinhVien;
