import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "./systemInfoSlice";

const useSystemInfo = () => {
  const dispatch = useDispatch();
  const disk = useSelector((store) => store.systemInfo.disk);
  const block = useSelector((store) => store.systemInfo.block);

  const getSystemInfo = async () => {
    const jsonData = await fetch("http://localhost:2233/api/systemInfo");
    const JSOData = await jsonData.json();
    dispatch(addInfo(JSOData));
  };

  useEffect(() => {
    const i = setInterval(() => {
      getSystemInfo();
    }, 5000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return null;
};

export default useSystemInfo;
