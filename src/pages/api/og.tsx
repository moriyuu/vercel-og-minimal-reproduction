import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hello! 
        ( ᐛ👐)パァ
        𑘭𑘨𑘪𑘦
        𗀔𗼘𗁅𗔔
        𓇋𓅱𓄙𓅓
        𐎍𐎎𐎋𐎜
        𐎿𐎼𐎻𐎡
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
