import Image from "next/image";
import MenuList from "./MenuList";
import Topbar from "./Topbar";
import logo from "../../../assets/images/logo.svg";
import logo_sm from "../../../assets/images/logo-sm.svg";
 
export default function Sidebar(){
    return(
        <>
            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>

            <div className="pc-mob-header pc-header">
                <div className="pcm-logo">
                <Image src={logo} alt="" className="logo logo-lg"/>
                </div>
                <div className="pcm-toolbar">
                    <a href="#!" className="pc-head-link" id="mobile-collapse">
                        <div className="hamburger hamburger--arrowturn">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </a>
                    <a href="#!" className="pc-head-link" id="headerdrp-collapse">
                        <i data-feather="align-right"></i>
                    </a>
                    <a href="#!" className="pc-head-link" id="header-collapse">
                        <i data-feather="more-vertical"></i>
                    </a>
                </div>
            </div>

            <nav className="pc-sidebar ">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <a href="index.html" className="b-brand">
                            <Image src={logo} alt="" className="logo logo-lg"/>
                        </a>
                    </div>
                    <div className="navbar-content">
                        <ul className="pc-navbar">
                            <MenuList />
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="pc-header ">
                <div className="header-wrapper">
                    <Topbar/>
                </div>
            </header>

        </>
    )
}