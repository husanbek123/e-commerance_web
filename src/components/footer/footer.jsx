import React from "react";
import { useDataFetch } from "../hooks/getData.js";
import "../../App.scss";
import cl from "./footer.module.scss";
import parse from "html-react-parser";
import { Loader } from "../Loader/index.jsx";
export const Footer = () => {
  let { data, isLoading } = useDataFetch(["information"], "/information");
  const infoData = data?.data[0];

  if (isLoading) return <Loader />;
  return (
    <footer className={cl.footer}>
      <div className={cl.container}>
        <div className={cl.footer__wrapper}>
          <div className={cl.footer__info}>
            <a className={cl.footer__folder}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3082/3082383.png"
                width={30}
              />
              <p>address:{infoData?.address}</p>
            </a>
            <a
              href={`https://${infoData?.email}`}
              className={cl.footer__folder}
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
                width={30}
              />
              <p>email:{infoData?.email}</p>
            </a>
            <a href={infoData?.telegram} className={cl.footer__folder}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png"
                alt=""
                width={30}
              />
              <p>telegram:{infoData?.telegram}</p>
            </a>
            <a href={infoData?.instagram} className={cl.footer__folder}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                alt=""
                width={30}
              />
              <p>instagram:{infoData?.instagram}</p>
            </a>
            {infoData?.phone?.map((e, i) => (
              <a href={`tel:${e}`} className={cl.footer__folder}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/725/725624.png"
                  alt=""
                  width={30}
                />
                <p>Phone :{e}</p>
              </a>
            ))}
          </div>
          <div className={cl.map}>
            {infoData?.addressMap ? parse(infoData?.addressMap) : "No Info"}
          </div>
        </div>
        <p className={cl.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        </p>
      </div>
    </footer>
  );
};
