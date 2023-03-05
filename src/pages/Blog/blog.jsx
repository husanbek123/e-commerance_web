import React from "react";
import { Link } from "react-router-dom";
import { useDataFetch } from "../../components/hooks/getData";
import c from "../Blog/blog.module.scss";

function Blog() {
  const allProducts = useDataFetch(["products"], "/products")
  console.log(allProducts);
  return (
    <div className={c.blog}>
      <h1>Fruit and vegetables</h1>
      <div className={c.cards1}>
        <div className={c.card1}>
          <p>tag</p>
          <p className={c.absolut}>
            This is a space for your blog
            <br /> headline, it can be long don’t 
            <br />
            worry
            about that
          </p>
          <div className={c.user}>
            <img
              src="https://s3-alpha-sig.figma.com/img/24fc/d469/2a55e2577b912f31252342d93dc24f44?Expires=1678665600&Signature=LmkTGFdHb9dJ5AZU4-69tZbxgjUFbBq1IyGaTC~o8YztVfL~0Z2eBkqx3UCAHhMKzqyIH6mMAqB0wmoROaFrhWZIgipSxm8jLGJdmFxuyC9FbNYuhx3BI5exhl5HutLI~0r9APY63r4tfwM66mdJNBr4XkWVN8eMolTHmUxnnuQRGgMQz7sBKx1jKUG-9L9O7oSaNGT7PPPPmd~3NP-coGb34Q~xjZYmFhjce0ioYeKjaMBsJA3pbhTosEn2sjh4vkm7etOwkbqGktoQlnyCeuxyFETIu94da1XT7TfnXk8jR4LGV5hGS6zgZbCtR8n1kSRv~sAUfi18YVNk-q0nZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="user"
            />
            <p><span>Author</span>05.03.2023</p>
          </div>
        </div>
        <div className={c.card01}>
          <p>tag</p>
          <p className={c.absolut}>
            This is a space for your blog
            <br /> headline, it can be long don’t 
            <br />
            worry
            about that
          </p>
          <div className={c.user}>
            <img
              src="https://s3-alpha-sig.figma.com/img/24fc/d469/2a55e2577b912f31252342d93dc24f44?Expires=1678665600&Signature=LmkTGFdHb9dJ5AZU4-69tZbxgjUFbBq1IyGaTC~o8YztVfL~0Z2eBkqx3UCAHhMKzqyIH6mMAqB0wmoROaFrhWZIgipSxm8jLGJdmFxuyC9FbNYuhx3BI5exhl5HutLI~0r9APY63r4tfwM66mdJNBr4XkWVN8eMolTHmUxnnuQRGgMQz7sBKx1jKUG-9L9O7oSaNGT7PPPPmd~3NP-coGb34Q~xjZYmFhjce0ioYeKjaMBsJA3pbhTosEn2sjh4vkm7etOwkbqGktoQlnyCeuxyFETIu94da1XT7TfnXk8jR4LGV5hGS6zgZbCtR8n1kSRv~sAUfi18YVNk-q0nZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="user"
            />
            <p><span>Author</span> 05.03.2023</p>
          </div>
        </div>
      </div>
      {/* {allProducts?.data?.data?.map((w) => (
        <div className="wrapper">
          <Link to={`/blog/${w.id}`}>
            <p>
              <span>{w?.id}</span>
              <br />
              {w?.body}
            </p>
          </Link>
        </div>
      ))} */}
    </div>
  );
}

export default Blog;
