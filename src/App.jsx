import { useState } from "react";

import ThongTinSinhVien from "./components/ThongTinSinhVien/ThongTinSinhVien";
import SinhVienTable from "./components/SinhVienTable/SinhVienTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <h1 className="bg-black px-3 py-5 text-white text-2xl font-bold">
        Thông Tin Sinh Viên
      </h1>
      <ThongTinSinhVien />
      <SinhVienTable />
    </div>
  );
}

export default App;
