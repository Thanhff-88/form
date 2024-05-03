import { Fragment, useEffect } from 'react';
import './css.css';
import { useAuthContext } from '~/contexts/AuthContextProvider';
import { addForm } from '~/services/formService';
import { useLoadingContext } from '~/contexts/LoadingContextProvider';
import { child, get, getDatabase, ref } from 'firebase/database';
import { toastError, toastSuccess } from '~/hooks/useToast';
import { Link } from 'react-router-dom';
import config from '~/configs';

function Home() {
  const { currentUser } = useAuthContext();
  const { setLoading } = useLoadingContext();

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = './script.js';
  //   script.async = true;

  //   document.body.appendChild(script);
  // }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const formData = {
      so: event.target.so.value,
      timeout: event.target.timeout.value,
      bksx: event.target.bksx.value,
      dvvt: event.target.dvvt.value,
      dcdvvt: event.target.dcdvvt.value,
      sdtdvvt: event.target.sdtdvvt.value,
      htlx: event.target.htlx.value,
      gplx: event.target.gplx.value,
      sdtlx: event.target.sdtlx.value,
      tntvc: event.target.tntvc.value,
      dcntvc: event.target.dcntvc.value,
      shd: event.target.shd.value,
      ntn: event.target.ntn.value,
      tvc: event.target.tvc.value,
      dph: event.target.dph.value,
      dgh: event.target.dgh.value,
      tgvcdk: event.target.tgvcdk.value,
      bdt: event.target.bdt.value,
      kt: event.target.kt.value,
      tskm: event.target.tskm.value,
      thh: event.target.thh.value,
      klhh: event.target.klhh.value,
      ttk: event.target.ttk.value,
      bsrm: event.target.bsrm.value,
      ddxl1: event.target.ddxl1.value,
      klhl1: event.target.klhl1.value,
      tgl1: event.target.tgl1.value,
      ddxl2: event.target.ddxl2.value,
      klhl2: event.target.klhl2.value,
      tgl2: event.target.tgl2.value,
      dddhl1: event.target.dddhl1.value,
      kldhl1: event.target.kldhl1.value,
      tgdhl1: event.target.tgdhl1.value,
      dddhl2: event.target.dddhl2.value,
      kldhl2: event.target.kldhl2.value,
      tgdhl2: event.target.tgdhl2.value,
      xncnxh: event.target.xncnxh.value,
      xncndh: event.target.xncndh.value,
    };
    const dbRef = ref(getDatabase());
    get(child(dbRef, `forms/${event.target.so.value}`)).then((snapshot) => {
      if (!snapshot.exists()) {
        addForm(formData).then((_) => {
          setLoading(false);
          event.target.so.value = '';
          event.target.timeout.value = '';
          event.target.bksx.value = '';
          event.target.dvvt.value = '';
          event.target.dcdvvt.value = '';
          event.target.sdtdvvt.value = '';
          event.target.htlx.value = '';
          event.target.gplx.value = '';
          event.target.sdtlx.value = '';
          event.target.tntvc.value = '';
          event.target.dcntvc.value = '';
          event.target.shd.value = '';
          event.target.ntn.value = '';
          event.target.tvc.value = '';
          event.target.dph.value = '';
          event.target.dgh.value = '';
          event.target.tgvcdk.value = '';
          event.target.bdt.value = '';
          event.target.kt.value = '';
          event.target.tskm.value = '';
          event.target.thh.value = '';
          event.target.klhh.value = '';
          event.target.ttk.value = '';
          event.target.bsrm.value = '';
          event.target.ddxl1.value = '';
          event.target.klhl1.value = '';
          event.target.tgl1.value = '';
          event.target.ddxl2.value = '';
          event.target.klhl2.value = '';
          event.target.tgl2.value = '';
          event.target.dddhl1.value = '';
          event.target.kldhl1.value = '';
          event.target.tgdhl1.value = '';
          event.target.dddhl2.value = '';
          event.target.kldhl2.value = '';
          event.target.tgdhl2.value = '';
          event.target.xncnxh.value = '';
          event.target.xncndh.value = '';
          toastSuccess('Gửi biểu mẫu thành công');
        });
      } else {
        toastError(`Đã tồn tại biểu mẫu với số này`);
        setLoading(false);
      }
    });
  };
  return (
    <Fragment>
      {currentUser.email === import.meta.env.VITE_EMAIL_ADMIN && (
        <Link to={config.routes.list} className="button-24 absolute top-[10px] right-[10px]" role="button">
          Danh sách biểu mẫu
        </Link>
      )}
      <div className="flex justify-center mt-[30px] text-4xl sm:text-2xl xs:text-lg font-bold text-[#6a64f1]">
        Biểu mẫu vận tải
      </div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper max-w-[50%] lg:max-w-[80%] md:max-w-[90%] sm:max-w-[95%] xs:max-w-[98%]">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="so" className="formbold-form-label">
                Số và thời hạn:
              </label>
              <div className="sm:flex-col">
                <input
                  type="text"
                  name="so"
                  id="so"
                  placeholder="Số"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                  required
                />
                <input
                  type="date"
                  name="timeout"
                  id="timeout"
                  placeholder="Có giá trị đến"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="bksx" className="formbold-form-label">
                Biển kiểm soát xe:
              </label>
              <div>
                <input
                  type="text"
                  name="bksx"
                  id="bksx"
                  placeholder="Biển kiểm soát xe"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="font-semibold my-3">1. Thông tin về đơn vị kinh doanh</div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="dvvt" className="formbold-form-label">
                Đơn vị vận tải:
              </label>
              <div>
                <input
                  type="text"
                  name="dvvt"
                  id="dvvt"
                  placeholder="Đơn vị vận tải"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="dcdvvt" className="formbold-form-label">
                Địa chỉ:
              </label>
              <input
                type="text"
                name="dcdvvt"
                id="dcdvvt"
                placeholder="Địa chỉ"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="sdtdvvt" className="formbold-form-label">
                Số điện thoại liên hệ:
              </label>
              <input
                type="text"
                name="sdtdvvt"
                id="sdtdvvt"
                placeholder="Số điện thoại liên hệ"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>
            <div className="font-semibold my-3">2. Thông tin về người lái xe</div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="htlx" className="formbold-form-label">
                Họ tên lái xe:
              </label>
              <div>
                <input
                  type="text"
                  name="htlx"
                  id="htlx"
                  placeholder="Họ tên lái xe"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="gplx" className="formbold-form-label">
                Giấy phép lái xe số:
              </label>
              <input
                type="text"
                name="gplx"
                id="gplx"
                placeholder="Giấy phép lái xe số"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="sdtlx" className="formbold-form-label">
                Số điện thoại liên hệ:
              </label>
              <input
                type="text"
                name="sdtlx"
                id="sdtlx"
                placeholder="Số điện thoại liên hệ"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>

            <div className="font-semibold my-3">
              3. Thông tin về người thuê vận tải
              <p className="font-normal text-sm">(Dành cho đơn vị kinh doanh vận tải hàng hóa kê khai)</p>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="tntvc" className="formbold-form-label">
                Tên người thuê vận chuyển:
              </label>
              <div>
                <input
                  type="text"
                  name="tntvc"
                  id="tntvc"
                  placeholder="Tên người thuê vận chuyển"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="dcntvc" className="formbold-form-label">
                Địa chỉ:
              </label>
              <input
                type="text"
                name="dcntvc"
                id="dcntvc"
                placeholder="Địa chỉ"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>

            <div className="font-semibold my-3">
              4. Thông tin về hợp đồng vận tải
              <p className="font-normal text-sm">(Dành cho đơn vị kinh doanh vận tải)</p>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="shd" className="formbold-form-label">
                Số hợp đồng:
              </label>
              <div>
                <input
                  type="text"
                  name="shd"
                  id="shd"
                  placeholder="Số hợp đồng"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="ntn" className="formbold-form-label">
                Ngày tháng năm:
              </label>
              <input
                type="date"
                name="ntn"
                id="ntn"
                placeholder="Ngày tháng năm"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>

            <div className="font-semibold my-3">5. Thông tin về chuyến đi</div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="tvc" className="formbold-form-label">
                Tuyến vận chuyển:
              </label>
              <div>
                <input
                  type="text"
                  name="tvc"
                  id="tvc"
                  placeholder="Tuyến vận chuyển"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="dph" className="formbold-form-label">
                Điểm xếp hàng:
              </label>
              <input
                type="text"
                name="dph"
                id="dph"
                placeholder="Điểm xếp hàng"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>

            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="dgh" className="formbold-form-label">
                Điểm giao hàng:
              </label>
              <input
                type="text"
                name="dgh"
                id="dgh"
                placeholder="Điểm giao hàng"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="tgvcdk" className="formbold-form-label">
                Thời gian vận chuyển dự kiến:
              </label>
              <input
                type="text"
                name="tgvcdk"
                id="tgvcdk"
                placeholder="Thời gian vận chuyển dự kiến"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="bdt" className="formbold-form-label">
                Thời gian đi và đến:
              </label>
              <div className="xs:flex-col">
                <input
                  type="text"
                  name="bdt"
                  id="bdt"
                  placeholder="Bắt đầu từ (giờ)"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
                <input
                  type="text"
                  name="kt"
                  id="kt"
                  placeholder="Đến (giờ)"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="tskm" className="formbold-form-label">
                Tổng số km dự kiến:
              </label>
              <div>
                <input
                  type="text"
                  name="tskm"
                  id="tskm"
                  placeholder="Tổng số km dự kiến"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="font-semibold my-3">6. Thông tin về hàng hóa</div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="thh" className="formbold-form-label">
                Tên hàng hóa:
              </label>
              <div>
                <input
                  type="text"
                  name="thh"
                  id="thh"
                  placeholder="Tên hàng hóa"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="klhh" className="formbold-form-label">
                Khối lượng hàng hóa:
              </label>
              <input
                type="text"
                name="klhh"
                id="klhh"
                placeholder="Khối lượng hàng hóa"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>

            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="ttk" className="formbold-form-label">
                Thông tin khác:
              </label>
              <input
                type="text"
                name="ttk"
                id="ttk"
                placeholder="Thông tin khác"
                className="formbold-form-input sm:placeholder:text-[14px]"
              />
            </div>
            <div className="font-semibold my-3">7. Thông tin về rơ moóc, sơ mi rơ moóc</div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="bsrm" className="formbold-form-label">
                Biển số rơ moóc, sơ mi rơ moóc:
              </label>
              <div>
                <input
                  type="text"
                  name="bsrm"
                  id="bsrm"
                  placeholder="Biển số rơ moóc, sơ mi rơ moóc"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="font-semibold my-3">8. Phần dành cho người xếp, dỡ hàng hóa lên, xuống xe ghi</div>
            <p className="font-medium mb-3">Thông tin về xếp hàng lên xe</p>
            <p className="font-normal text-sm mb-3">- Xếp lần 1:</p>

            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="ddxl1" className="formbold-form-label">
                Địa điểm:
              </label>
              <div>
                <input
                  type="text"
                  name="ddxl1"
                  id="ddxl1"
                  placeholder="Địa điểm"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="klhl1" className="formbold-form-label">
                Khối lượng hàng:
              </label>
              <div>
                <input
                  type="text"
                  name="klhl1"
                  id="klhl1"
                  placeholder="Khối lượng hàng"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="tgl1" className="formbold-form-label">
                Thời gian:
              </label>
              <div>
                <input
                  type="text"
                  name="tgl1"
                  id="tgl1"
                  placeholder="Thời gian"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <p className="font-normal text-sm my-3">- Xếp lần 2:</p>

            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="ddxl2" className="formbold-form-label">
                Địa điểm:
              </label>
              <div>
                <input
                  type="text"
                  name="ddxl2"
                  id="ddxl2"
                  placeholder="Địa điểm"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="klhl2" className="formbold-form-label">
                Khối lượng hàng:
              </label>
              <div>
                <input
                  type="text"
                  name="klhl2"
                  id="klhl2"
                  placeholder="Khối lượng hàng"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="tgl2" className="formbold-form-label">
                Thời gian:
              </label>
              <div>
                <input
                  type="text"
                  name="tgl2"
                  id="tgl2"
                  placeholder="Thời gian"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="xncnxh" className="formbold-form-label">
                Xác nhận của người xếp hàng:
              </label>
              <div>
                <input
                  type="text"
                  name="xncnxh"
                  id="xncnxh"
                  placeholder="Xác nhận của người xếp hàng"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <p className="font-medium mb-3">Thông tin về dỡ hàng xuống xe</p>
            <p className="font-normal text-sm mb-3">- Dỡ lần 1:</p>

            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="dddhl1" className="formbold-form-label">
                Địa điểm:
              </label>
              <div>
                <input
                  type="text"
                  name="dddhl1"
                  id="dddhl1"
                  placeholder="Địa điểm"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="kldhl1" className="formbold-form-label">
                Khối lượng hàng:
              </label>
              <div>
                <input
                  type="text"
                  name="kldhl1"
                  id="kldhl1"
                  placeholder="Khối lượng hàng"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="tgdhl1" className="formbold-form-label">
                Thời gian:
              </label>
              <div>
                <input
                  type="text"
                  name="tgdhl1"
                  id="tgdhl1"
                  placeholder="Thời gian"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <p className="font-normal text-sm my-3">- Dỡ lần 2:</p>

            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="dddhl2" className="formbold-form-label">
                Địa điểm:
              </label>
              <div>
                <input
                  type="text"
                  name="dddhl2"
                  id="dddhl2"
                  placeholder="Địa điểm"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="kldhl2" className="formbold-form-label">
                Khối lượng hàng:
              </label>
              <div>
                <input
                  type="text"
                  name="kldhl2"
                  id="kldhl2"
                  placeholder="Khối lượng hàng"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="tgdhl2" className="formbold-form-label">
                Thời gian:
              </label>
              <div>
                <input
                  type="text"
                  name="tgdhl2"
                  id="tgdhl2"
                  placeholder="Thời gian"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="xncndh" className="formbold-form-label">
                Xác nhận của người dỡ hàng:
              </label>
              <div>
                <input
                  type="text"
                  name="xncndh"
                  id="xncndh"
                  placeholder="Xác nhận của người dỡ hàng"
                  className="formbold-form-input sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div className="formbold-checkbox-wrapper">
              <label htmlFor="supportCheckbox" className="formbold-checkbox-label">
                <div className="formbold-relative">
                  <input type="checkbox" id="supportCheckbox" className="formbold-input-checkbox" required />
                  <div className="formbold-checkbox-inner">
                    <span className="formbold-opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        className="formbold-stroke-current"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.81868 0.688604L4.16688 5.4878L2.05598 3.29507C1.70417 2.92271 1.1569 2.96409 0.805082 3.29507C0.453266 3.66742 0.492357 4.24663 0.805082 4.61898L3.30689 7.18407C3.54143 7.43231 3.85416 7.55642 4.16688 7.55642C4.47961 7.55642 4.79233 7.43231 5.02688 7.18407L10.0696 2.05389C10.4214 1.68154 10.4214 1.10233 10.0696 0.729976C9.71776 0.357624 9.17049 0.357625 8.81868 0.688604Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="sm:text-[14px]">
                  Bằng việc tick vào ô này đồng nghĩa với việc
                  <span className=" text-[#6a64f1]">&nbsp;dữ liệu điền ở trên là đúng</span>
                </div>
              </label>
            </div>

            <button className="formbold-btn">Gửi</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
