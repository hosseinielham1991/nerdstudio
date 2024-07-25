import styles from "../cardHistory/CardHistory.module.css";
import { PiPushPinFill } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const CardHistory = ({
  title = "Lorem ipsum dolor ametLorem ipsum dolor ametL orem ipsum dolor amet",
  language = "English",
  date = "50 min ago",
}) => {
  return (
    <div
      className={
        "flex flex-col w-full rounded-8 border border-colorline p-3 mt-5 " +
        styles.main
      }
    >
      <div className="h-1/2 flex items-center justify-between ">
        <label className={"text-12 " + styles.truncate}>{title}</label>
        <div className="flex flex-row items-center justify-between">
          <PiPushPinFill className="text-18 m-1 text-active"></PiPushPinFill>
          <CiBookmark className="text-18 text-secondary "></CiBookmark>
          <FaRegTrashAlt className="text-18 m-1 text-secondary"></FaRegTrashAlt>
        </div>
      </div>
      <div className="h-1/2 flex items-center justify-between ">
        <label className="text-10 text-mute w-1/2">{language}</label>
        <label className=" text-10 text-mute w-1/2 text-right">{date}</label>
      </div>
    </div>
  );
};

export default CardHistory;
