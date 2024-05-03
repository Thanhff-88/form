import { Fragment } from 'react/jsx-runtime';

function Preview() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <Fragment>
      <button className="bg-slate-500 z-[999] absolute top-0 left-0" onClick={handlePrint}>
        Pirnt
      </button>
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <div id="pf1" className="pf w0 h0" data-page-no="1">
          <div className="pc pc1 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,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bQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAANzrmOA6SYwAuHIAwLde8LZWAAAAYMKfWAAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoS6+rElEAAAAuSURBVAAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAA4FeSGAEAAICpB+nYfw+rn+ufAAAAAElFTkSuQmCC"
            />
            <div className="c x0 y1 w2 h0">
              <div className="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls0 ws1">
                GIẤY VẬN T<span className="_ _0"></span>ẢI<span className="ff2"> </span>
              </div>
              <div className="t m0 x2 h3 y3 ff3 fs0 fc0 sc0 ls0 ws1">
                Số: 2131231231244. Có giá tr<span className="_ _0"></span>ị đến…..<span className="ff4"> </span>
              </div>
              <div className="t m0 x3 h3 y4 ff3 fs0 fc0 sc0 ls0 ws1">
                Biển kiểm<span className="_ _0"></span> soát xe:……………………………<span className="_ _0"></span>….
                <span className="ff4"></span>
              </div>
            </div>
            <div className="c x3 y5 w3 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                1. Thông tin v<span className="_ _0"></span>ề đơn vị kinh doanh<span className="_ _0"></span>
                <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x4 y5 w4 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                2. Thông tin v<span className="_ _0"></span>ề người lái xe<span className="_ _0"></span>
                <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x3 y7 w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Đơn vị vận tải: <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y7 w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Họ tên lái xe:<span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 y9 w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Địa chỉ: <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y9 w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Giấy phép lái xe số: <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 ya w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Số điện thoại liên hệ:<span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 ya w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Số điện thoại liên hệ:<span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 yb w3 h5">
              <div className="t m0 x0 h2 yc ff1 fs0 fc0 sc0 ls0 ws1">
                3. Thông tin v<span className="_ _0"></span>ề người thuê vận tải <span className="_ _0"></span>
                <span className="ff2"> </span>
              </div>
              <div className="t m0 x0 h3 yd ff3 fs0 fc0 sc0 ls0 ws1">
                (Dành cho đơn vị k<span className="_ _0"></span>inh doanh vận tải hàn<span className="_ _0"></span>g hóa
              </div>
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1">kê khai)</div>
            </div>
            <div className="c x4 yb w4 h5">
              <div className="t m0 x0 h2 yc ff1 fs0 fc0 sc0 ls0 ws1">
                4. Thông tin v<span className="_ _0"></span>ề hợp đồng vận tải<span className="_ _0"></span>
                <span className="ff2"> </span>
              </div>
              <div className="t m0 x0 h3 yd ff3 fs0 fc0 sc0 ls0 ws1">
                (Dành cho đơn vị k<span className="_ _0"></span>inh doanh vận tải)<span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 ye w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Tên người thuê <span className="_ _0"></span>vận chuyển: <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 ye w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Số hợp đồng:<span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 yf w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Địa chỉ: <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 yf w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Ngày… tháng… năm<span className="_ _0"></span>……<span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 y10 w3 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                5. Thông tin v<span className="_ _0"></span>ề chuyến đi <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x4 y10 w4 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                6. Thông tin v<span className="_ _0"></span>ề hàng hóa<span className="ff2"> </span>
              </div>
            </div>
            <div className="c x3 y11 w3 h7">
              <div className="t m0 x0 h3 y12 ff3 fs0 fc0 sc0 ls0 ws1">
                Tuyến vận chuyển: <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x4 y11 w4 h7">
              <div className="t m0 x0 h6 y12 ff4 fs0 fc0 sc0 ls0 ws1">
                Tên hàng hóa:<span className="_ _0"></span>
              </div>
            </div>
            <div className="c x3 y13 w3 h7">
              <div className="t m0 x0 h3 y12 ff3 fs0 fc0 sc0 ls0 ws1">
                Điểm xếp hàng: <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x4 y13 w4 h7">
              <div className="t m0 x0 h3 y12 ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng hóa<span className="_ _0"></span>:<span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 y14 w3 h8">
              <div className="t m0 x0 h3 y12 ff3 fs0 fc0 sc0 ls0 ws1">
                Điểm giao hàng: <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x4 y14 w4 h8">
              <div className="t m0 x0 h6 y12 ff4 fs0 fc0 sc0 ls0 ws1">
                Thông tin khác<span className="_ _0"></span>:
              </div>
            </div>
            <div className="c x3 y15 w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Thời gian vận chu<span className="_ _0"></span>yển dự kiến:………. <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y15 w4 h4">
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y16 w3 h9">
              <div className="t m0 x0 h3 y17 ff3 fs0 fc0 sc0 ls0 ws1">
                Bắt đầu từ:………(gi<span className="_ _0"></span>ờ) <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws0">
                đến………..(giờ)<span className="ff4 ws1"> </span>
              </div>
            </div>
            <div className="c x4 y16 w4 h9">
              <div className="t m0 x0 h6 y17 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y18 w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Tổng số km<span className="_ _0"></span> dự kiến:<span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y18 w4 h4">
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y19 w3 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                7. Thông tin v<span className="_ _0"></span>ề rơ moóc, sơ mi rơ moóc<span className="_ _0"></span>
                <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x4 y19 w4 h4">
              <div className="t m0 x0 h6 y6 ff2 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y1a w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Biển số rơ m<span className="_ _0"></span>oóc, sơ mi rơ m<span className="_ _0"></span>oóc
                <span className="ff4"></span>
              </div>
            </div>
            <div className="c x4 y1a w4 h4">
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y1b w5 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                8. Phần dành cho ngư<span className="_ _0"></span>ời xếp, dỡ hàng hó<span className="_ _0"></span>a lên,
                xuống
                <span className="_ _0"></span> xe ghi<span className="_ _0"></span>
                <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x3 y1c w3 ha">
              <div className="t m0 x0 h2 y1d ff1 fs0 fc0 sc0 ls0 ws1">
                Thông tin về xếp hàng<span className="_ _0"></span> lên xe<span className="_ _0"></span>
                <span className="ff2"> </span>
              </div>
              <div className="t m0 x0 h3 y1e ff4 fs0 fc0 sc0 ls0 ws1">
                -
                <span className="ff3">
                  Xếp lần 1: Địa điểm<span className="_ _0"></span>:………………………<span className="_ _0"></span>
                </span>
              </div>
              <div className="t m0 x0 h3 y1f ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng:………<span className="_ _0"></span>….. thời gian:… <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h3 y20 ff3 fs0 fc0 sc0 ls0 ws1">
                Xác nhận của người<span className="_ _0"></span> xếp hàng: <span className="_ _0"></span>……………
                <span className="ff4"></span>
              </div>
              <div className="t m0 x0 h6 y21 ff4 fs0 fc0 sc0 ls0 ws1"></div>
              <div className="t m0 x0 h3 y22 ff4 fs0 fc0 sc0 ls0 ws1">
                -
                <span className="ff3">
                  Xếp lần 2: Địa điểm<span className="_ _0"></span>:………………………<span className="_ _0"></span>
                </span>
              </div>
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng:………<span className="_ _0"></span>….. thời gian:……<span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y1c w4 ha">
              <div className="t m0 x0 h2 y1d ff1 fs0 fc0 sc0 ls0 ws1">
                Thông tin về dỡ h<span className="_ _0"></span>àng xuống xe<span className="_ _0"></span>
                <span className="ff2"> </span>
              </div>
              <div className="t m0 x0 h3 y1e ff4 fs0 fc0 sc0 ls0 ws1">
                -
                <span className="ff3">
                  Dỡ lần 1: Địa điểm<span className="_ _0"></span>:………………………. <span className="_ _0"></span>
                </span>
              </div>
              <div className="t m0 x0 h3 y1f ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng:……… <span className="_ _0"></span>thời gian:………..<span className="_ _0"></span>
                <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h3 y20 ff3 fs0 fc0 sc0 ls0 ws1">
                Xác nhận của người<span className="_ _0"></span> dỡ hàng: …………<span className="_ _0"></span>…..
                <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y21 ff4 fs0 fc0 sc0 ls0 ws1"></div>
              <div className="t m0 x0 h3 y22 ff4 fs0 fc0 sc0 ls0 ws1">
                -
                <span className="ff3">
                  Dỡ lần 2: Địa điểm<span className="_ _0"></span>:………………………. <span className="_ _0"></span>
                </span>
              </div>
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng:……… <span className="_ _0"></span>thời gian:………<span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
            </div>
          </div>
          <div className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf2" className="pf w0 h0" data-page-no="2">
          <div className="pc pc2 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAe6ElEQVR42uzawQnAIBREwWyw/5Y3RQgaZaaEPXx5YNo+AAAAMOE1AQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAACAtjQBAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALYZJjhLEiMAABynrRHQljhMAIskceWAK4+bEbieP7EAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAsMMwwXGSGAFw5QCAf73gba0AAADADH9iAQAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAACAr/06pgEAgGEYpvAnPRD7KhtCvuAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAAAyoRAAAA+DojnRtoVywWQQAAAABJRU5ErkJggg=="
            />
            <div className="c x3 y5 w3 hb">
              <div className="t m0 x0 h3 y23 ff3 fs0 fc0 sc0 ls0 ws1">
                Xác nhận của người<span className="_ _0"></span> xếp hàng: ………<span className="_ _0"></span>……
                <span className="ff4"></span>
              </div>
            </div>
            <div className="c x4 y5 w4 hb">
              <div className="t m0 x0 h3 y23 ff3 fs0 fc0 sc0 ls0 ws1">
                Xác nhận của người<span className="_ _0"></span> dỡ hàng: …………<span className="_ _0"></span>…
                <span className="_ _0"></span>
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y24 ff4 fs0 fc0 sc0 ls0 ws1"></div>
              <div className="t m0 x0 h6 y12 ff4 fs0 fc0 sc0 ls0 ws1"></div>
              <div className="t m0 x0 h6 y6 ff2 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x0 y1 w2 h0">
              <div className="t m0 x3 h6 y25 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y26 w6 hc">
              <div className="t m0 x5 h6 y27 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x6 y26 w7 hc">
              <div className="t m0 x7 hd y28 ff5 fs0 fc0 sc0 ls0 ws1">
                …., ngày… tháng… n<span className="_ _0"></span>ăm……<span className="_ _0"></span>
                <span className="ff6"> </span>
              </div>
              <div className="t m0 x8 h2 y29 ff1 fs0 fc0 sc0 ls0 ws1">
                Đơn vị vận tải<span className="ff2"> </span>
              </div>
              <div className="t m0 x9 hd y2a ff5 fs0 fc0 sc0 ls0 ws1">
                (ký tên, đóng dấu (nếu có))<span className="_ _1"></span>
                <span className="ff6"> </span>
              </div>
              <div className="t m0 xa h6 y6 ff2 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x0 y1 w2 h0">
              <div className="t m0 x3 hd y2b ff5 fs0 fc0 sc0 ls0 ws1">
                Ghi chú: Tùy theo yêu c<span className="_ _0"></span>ầu quản lý, Đơn vị vậ<span className="_ _0"></span>
                n tải có thể bổ sung các<span className="_ _0"></span> thông tin <span className="_ _0"></span>
                <span className="ff6">
                  khác ngo<span className="_ _0"></span>ài các thông tin{' '}
                </span>
              </div>
              <div className="t m0 x3 hd y2c ff5 fs0 fc0 sc0 ls0 ws1">
                đã nêu trên.<span className="ff6"> </span>
              </div>
              <div className="t m0 x3 he y2d ff7 fs1 fc0 sc0 ls0 ws1"></div>
            </div>
          </div>
          <div className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Preview;
