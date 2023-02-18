import { h } from "preact";
import style from "./style.css";
import { getCurrentUrl } from "preact-router";
import { getTarget } from "../../lib/helper/redirector";
import { useEffect } from "preact/hooks";

const Home = () => {
  const url = getCurrentUrl();
  const target = getTarget(url);

  useEffect(() => {
    if (!target.value) return;

    window.location.href = target.value;
  }, [target]);

  const isError = target.value.length <= 0;

  return (
    <div>
      <div class={style.wrapper}>
        {isError ? (
          <p class={`${style.text} ${style.error}`}>
            Sorry! That link doesn't exist!
          </p>
        ) : (
          <p class={style.text}>{target.label}</p>
        )}
        {!isError ? <div class={style.overlay} /> : null}
      </div>
      {!isError ? <div class={style.underline} /> : null}
    </div>
  );
};

export default Home;
