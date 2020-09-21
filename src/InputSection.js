import React, { useState, useEffect } from "react";
import convert from "color-convert";
import { Typography } from "@material-ui/core";
import ColourDisplayBox from "./ColourDisplayBox";
import RgbField from "./ColourFields/RgbField";
import HexField from "./ColourFields/HexField";
import HslField from "./ColourFields/HslField";
import CmykField from "./ColourFields/CmykField";

const InputSection = () => {
  const [colour, setColour] = useState("black");
  const [lastColourUpdated, setLastColourUpdated] = useState();

  const [state, setState] = useState({
    rgbR: 0,
    rgbG: 0,
    rgbB: 0,
    hexR: 0,
    hexG: 0,
    hexB: 0,
    hslH: 0,
    hslS: 0,
    hslL: 0,
    cmykC: 0,
    cmykM: 0,
    cmykY: 0,
    cmykK: 0,
  });

  useEffect(() => {
    convertColours();
    setColour(`rgb(${state.rgbR}, ${state.rgbG}, ${state.rgbB})`);
  }, [
    state.rgbR,
    state.rgbG,
    state.rgbB,
    state.hexR,
    state.hexG,
    state.hexB,
    state.hslH,
    state.hslS,
    state.hslL,
    state.cmykC,
    state.cmykM,
    state.cmykY,
    state.cmykK,
    lastColourUpdated,
  ]);

  const updateRgb = (newRgb) => {
    setState((state) => ({ ...state, rgbR: newRgb[0] }));
    setState((state) => ({ ...state, rgbG: newRgb[1] }));
    setState((state) => ({ ...state, rgbB: newRgb[2] }));
  };

  const updateHex = (newHex) => {
    setState((state) => ({ ...state, hexR: newHex.slice(0, 2) }));
    setState((state) => ({ ...state, hexG: newHex.slice(2, 4) }));
    setState((state) => ({ ...state, hexB: newHex.slice(4, 6) }));
  };

  const updateHsl = (newHsl) => {
    setState((state) => ({ ...state, hslH: newHsl[0] }));
    setState((state) => ({ ...state, hslS: newHsl[1] }));
    setState((state) => ({ ...state, hslL: newHsl[2] }));
  };

  const updateCmyk = (newCmyk) => {
    setState((state) => ({ ...state, cmykC: newCmyk[0] }));
    setState((state) => ({ ...state, cmykM: newCmyk[1] }));
    setState((state) => ({ ...state, cmykY: newCmyk[2] }));
    setState((state) => ({ ...state, cmykK: newCmyk[3] }));
  };

  const convertColours = () => {
    if (lastColourUpdated === 0) {
      let newHex = convert.rgb.hex(state.rgbR, state.rgbG, state.rgbB);
      let newHsl = convert.rgb.hsl(state.rgbR, state.rgbG, state.rgbB);
      let newCmyk = convert.rgb.cmyk(state.rgbR, state.rgbG, state.rgbB);
      updateHex(newHex);
      updateHsl(newHsl);
      updateCmyk(newCmyk);
    } else if (lastColourUpdated === 1) {
      let newRgb = convert.hex.rgb(`#${state.hexR}${state.hexG}${state.hexB}`);
      let newHsl = convert.hex.hsl(`#${state.hexR}${state.hexG}${state.hexB}`);
      let newCmyk = convert.hex.cmyk(
        `#${state.hexR}${state.hexG}${state.hexB}`
      );
      updateRgb(newRgb);
      updateHsl(newHsl);
      updateCmyk(newCmyk);
    } else if (lastColourUpdated === 2) {
      let newRgb = convert.hsl.rgb(state.hslH, state.hslS, state.hslL);
      let newHex = convert.hsl.hex(state.hslH, state.hslS, state.hslL);
      let newCmyk = convert.hsl.cmyk(state.hslH, state.hslS, state.hslL);
      updateRgb(newRgb);
      updateHex(newHex);
      updateCmyk(newCmyk);
    } else if (lastColourUpdated === 3) {
      let newRgb = convert.cmyk.rgb(
        state.cmykC,
        state.cmykM,
        state.cmykY,
        state.cmykK
      );
      let newHex = convert.cmyk.hex(
        state.cmykC,
        state.cmykM,
        state.cmykY,
        state.cmykK
      );
      let newHsl = convert.cmyk.hsl(
        state.cmykC,
        state.cmykM,
        state.cmykY,
        state.cmykK
      );
      updateRgb(newRgb);
      updateHex(newHex);
      updateHsl(newHsl);
    }
  };

  const handleChange = (prop) => (e) => {
    if (e.target.value === "") {
      setState({ ...state, [prop]: 0 });
    } else {
      if (prop.slice(0, -1) === "hex") {
        setState({ ...state, [prop]: e.target.value });
      } else {
        setState({ ...state, [prop]: parseInt(e.target.value) });
      }
    }

    if (prop.slice(0, -1) === "rgb") {
      setLastColourUpdated(0);
    } else if (prop.slice(0, -1) === "hex") {
      setLastColourUpdated(1);
    } else if (prop.slice(0, -1) === "hsl") {
      setLastColourUpdated(2);
    } else if (prop.slice(0, -1) === "cmyk") {
      setLastColourUpdated(3);
    }
  };

  return (
    <>
      <div>
        <Typography>Input Colour</Typography>
        <ColourDisplayBox colour={colour} />
        <RgbField
          onChangeR={handleChange("rgbR")}
          onChangeG={handleChange("rgbG")}
          onChangeB={handleChange("rgbB")}
          value={[state.rgbR, state.rgbG, state.rgbB]}
        />
        <HexField
          onChangeR={handleChange("hexR")}
          onChangeG={handleChange("hexG")}
          onChangeB={handleChange("hexB")}
          value={[state.hexR, state.hexG, state.hexB]}
        />
        <HslField
          onChangeH={handleChange("hslH")}
          onChangeS={handleChange("hslS")}
          onChangeL={handleChange("hslL")}
          value={[state.hslH, state.hslS, state.hslL]}
        />
        <CmykField
          onChangeC={handleChange("cmykC")}
          onChangeM={handleChange("cmykM")}
          onChangeY={handleChange("cmykY")}
          onChangeK={handleChange("cmykK")}
          value={[state.cmykC, state.cmykM, state.cmykY, state.cmykK]}
        />
      </div>
    </>
  );
};

export default InputSection;
