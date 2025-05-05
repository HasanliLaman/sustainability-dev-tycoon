import { useEffect } from "react";
import StyleLoading from "./style";

interface LoadingProps {
  setLoading: (value: boolean) => void;
}

const Loading: React.FC<LoadingProps> = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <StyleLoading>
      <div></div>
    </StyleLoading>
  );
};

export default Loading;
