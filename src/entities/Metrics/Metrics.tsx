import { YMInitializer } from "react-yandex-metrika";

export const Metrics = () => {
  return (
    <div>
      <YMInitializer accounts={[95483223]} />
    </div>
  );
};
