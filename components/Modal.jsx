
import Lottie from "lottie-react";

export default function Modal(props) {
  return (
    <div className="fixed top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 overflow-hidden">
      <div className=" ">
        <div className="flex flex-col items-center m-0 p-0 h-full w-full">
          <Lottie
            className={`rounded-full bg-indigo-200/10 backdrop-blur-sm`}
            animationData={props.animationData}
            loop={true}
            autoplay={true}
            style={{ height: 150, width: 150 }}
          />

          <p className="font-bold text-center">{props.message}</p>
        </div>
      </div>
    </div>
  );
}
