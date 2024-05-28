import React, { memo, useState } from "react";
import DemoWrapper from "./style";
import Indeicator from "@/base-ui/Indicator";

const Demo = memo(() => {
  const names = ["张三", "李四", "王五", "赵六", "钱八", "周九"];
  const [currentIndex, setCurrentIndex] = useState(0);

  function hanneleClick(isNext = true) {
    let nextIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = names.length - 1;
    if (nextIndex >= names.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <div onClick={(e) => hanneleClick(false)}>上一个</div>
        <div onClick={(e) => hanneleClick(true)}>下一个</div>
      </div>
      <div className="list">
        <Indeicator currentIndex={currentIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indeicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
