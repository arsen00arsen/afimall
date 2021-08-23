import React, { useEffect, useRef } from "react";
import { ReactComponent as Play } from "../../assets/icon/play.svg";
import { ReactComponent as Apple } from "../../assets/icon/apple.svg";
import "./eligibilityIcon.css";

const IconNames = ["SixBox", "TwoBox", "FiveBox", "ForBox", "Circle"];

export const EligibilityIcon = ({
  name,
  title,
  number,
  text,
  button,
  size,
  flex,
  ...rest
}) => {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      if (IconNames.includes(name)) {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!./icons/${name}.svg`
          )
        ).default;
      } else {
        console.log("Not found");
      }
      setLoading(false);
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      <div className={`${flex==='left'?'flex_Left':'flex_Right'}`}>
        <div className="icon_Wrapper">
          <div className="icon_Box">
            <ImportedIcon {...rest} />
            <span style={{ "--icon-position": size }} className="icon_Number">
              {number}
            </span>
          </div>

          <div>
            <p className="eligibility_Card_Context">{title}</p>

            {text && <p className="uniq_Text">{text}</p>}

            {button === 1 ? (
              <div>
                <button className="eligibility_Btn">Зарегистрироваться</button>
              </div>
            ) : button === 2 ? (
              <div className='btn_Wrapper'>
                <button className="btn">
                  <Apple />
                  <span>
                    Скачать в <br />
                    App Store
                  </span>
                </button>
                <button className="btn">
                  <Play />
                  <span>
                    Скачать в <br />
                    Google Play
                  </span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
  return null;
};
