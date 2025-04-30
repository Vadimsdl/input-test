import { useDispatch, useSelector } from "react-redux";
import { setFiles, useFileSelector, setSortBy } from "../../store/filesSlice";
import "./style.css";
import FileCard from "../FileCard";
import { useEffect } from "react";
import { getLocalStorageItem } from "../../helpers/localStorage";
import { IFile } from "../../types/file";

const FileList = () => {
  const { items, sortBy } = useSelector(useFileSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const files = getLocalStorageItem<IFile[] | null>({ key: "Files" });
    dispatch(setFiles(files ? files : []));
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value as "name" | "size" | "type" | "date"));
  };

  return (
    <>
      <div className="sort">
        <span>Sort by</span>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="size">Size</option>
          <option value="type">Type</option>
          <option value="date">Date</option>
        </select>
      </div>
      <div className="list_container">
        {items?.map((item) => (
          <FileCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default FileList;
