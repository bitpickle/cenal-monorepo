export default function Topbar() {
  return (
    <>
      <div className="ms-auto">
        <ul className="list-unstyled">
          <li className="dropdown pc-h-item">
            <a
              className="pc-head-link dropdown-toggle arrow-none me-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="material-icons-two-tone">search</i>
            </a>
            <div className="dropdown-menu dropdown-menu-end pc-h-dropdown drp-search">
              <form className="px-3">
                <div className="form-group d-flex align-items-center mb-0">
                  <i data-feather="search"></i>
                  <input
                    type="search"
                    className="form-control border-0 shadow-none"
                    placeholder="Search here. . ."
                  />
                </div>
              </form>
            </div>
          </li>
          <li className="dropdown pc-h-item">
            <a
              className="pc-head-link dropdown-toggle arrow-none me-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                width={40}
                height={40}
                src={"../../../assets/images/user/avatar-2.jpg"}
                alt="user-image"
                className="user-avtar"
              />
              <span className="mx-2">
                <span className="user-name">Joseph William</span>
                <span className="user-desc">Administrator</span>
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
              <a href="auth-signin.html" className="dropdown-item">
                <i className="material-icons-two-tone">chrome_reader_mode</i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
