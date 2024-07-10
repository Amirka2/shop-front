import { YMInitializer } from "react-yandex-metrika";

export const Metrics = () => {
  return (
    <div>
      <YMInitializer accounts={[97795015]} />
    </div>
  );
};
