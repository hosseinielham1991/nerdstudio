import styles from "./History.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import CardHistory from "../cardHistory/CardHistory";
import { cardHistoryData } from "@/data/dataList";
const History = ({ show ,onclose}) => {
  return (
    <div
      className={`${styles.holderHistory}  pl-17 pr-17 ${
        show ? styles.show : ""
      }`}
    >
      <div className="h-80 w-full flex flex-row  items-center border-b border-colorline">
        <div
          className={
            styles.holderInputSearch +
            " rounded-8 p-2  items-center justify-center flex flex-row "
          }
        >
          <IoMdSearch className="text-secondary text-icon "></IoMdSearch>
          <input
            type="text"
            placeholder="Search"
            className={styles.inputSearch + " p-2 rounded-8"}
          ></input>
        </div>

        <div className={styles.closeBtn + " items-center justify-center flex "}>
          <IoMdClose onClick={()=>{onclose();}} className="text-secondary  text-icon cursor-pointer "></IoMdClose>
        </div>
      </div>
      <div>
        {cardHistoryData.map((item, index) => (
          <CardHistory
            key={index} // Use a unique key if possible, index is a fallback
            title={item.title}
            language={item.language}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
