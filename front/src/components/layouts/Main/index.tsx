import Sidebar from "../../organisms/Navigation/Sidebar";

type Props = {
  children?: React.ReactNode;
};
export default function Main({ children }: Props) {
  return (
    <>
      <Sidebar />
      <div className="pc-container">
        <div className="pcoded-content">
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h5 className="m-b-10">Sample Page</h5>
                  </div>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">Sample Page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row wrapper">{children}</div>
        </div>
      </div>
    </>
  );
}
