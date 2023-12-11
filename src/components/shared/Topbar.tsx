
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

import LogoSvg from "/public/assets/images/logo.png";
import LogoutSvg from '../../../public/assets/icons/logout.svg'
import ProfileSvg from '../../../public/assets/icons/profile-placeholder.svg'

const Topbar = () => {
    return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src={LogoSvg}
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost">
            <img src={LogoutSvg} alt="logout" />
          </Button>
          <Link to="/" className="flex-center gap-3">
            <img
              src={ProfileSvg}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
