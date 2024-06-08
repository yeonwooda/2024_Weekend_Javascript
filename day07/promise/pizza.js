//피자만들기
// 1. 도우

const perepareDough = () => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("도우 준비 완료");
      success("도우");
    }, 1000);
  });
};

// 2. 토마토 소스

const addSauce = (dough) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("토마토소스 준비 완료");
      success(`${dough} + 토마토 소스`);
    }, 2000);
  });
};

// 3. 토핑

const addTopping = (doughWithSauce) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("피자 토핑 준비 완료");
      success(`${doughWithSauce} + 토마토 소스`);
    }, 2000);
  });
};

// 4. 피자 굽기

const backePizza = (doughWithSauceAndTopping) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log(`${doughWithSauceAndTopping} 굽기 완료`);
      success(`피자`);
    }, 1000);
  });
};

perepareDough()
  .then((v) => {
    return addSauce(v);
  })
  .then((v) => {
    return addTopping(v);
  })
  .then((v) => {
    return backePizza(v);
  })
  .then((v) => {
    console.log(`${v} 먹기`);
  });

prepareDough()
  .then((v) => addSauce(v))
  .then((v) => addTopping(v))
  .then((v) => bakePizza(v))
  .then((v) => console.log(`${v} + 피자 먹기`));
