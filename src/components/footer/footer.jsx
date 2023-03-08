import React from "react";
import { useDataFetch } from "../hooks/getData.js";
import "../../App.css";

import cl from "./footer.module.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
  let { data } = useDataFetch(["information"], "/information");
  const infoData = data?.data[0];

  return (
    <div>
      <footer className={cl.footer}>
        <div className="container">
          <div className={cl.footer__wrapper}>
            <div className={cl.footer__info}>
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3082/3082383.png"
                  width={30}
                />
                <p>address:{infoData?.address}</p>
              </a>
              <a>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
                  width={30}
                />
                <p>email:{infoData?.email}</p>
              </a>
              <a src={infoData?.telegram}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png"
                  alt=""
                  width={30}
                />
                <p>telegram:{infoData?.telegram}</p>
              </a>
              <Link>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW8_2xflThAf1MA2NKFrZ5P6uc6T3yuMh4dfqyPpIDw&s"
                  alt=""
                  width={30}
                />
                <p>instagram:{infoData?.instagram}</p>
              </Link>
              <Link>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/725/725624.png"
                  alt=""
                  width={30}
                />
                <p>Phone :{infoData?.phone}</p>
              </Link>
            </div>
            <div
              className={cl.footer__map}
              dangerouslySetInnerHTML={{ __html: infoData?.addressMap }}
            ></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

//
//
//
//
//
