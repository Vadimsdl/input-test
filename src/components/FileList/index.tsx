import { useDispatch, useSelector } from "react-redux";
import { setFiles, useFileSelector, setSortBy, setSortDirection } from "../../store/filesSlice";
import "./style.css";
import FileCard from "../FileCard";
import { ChangeEvent, useEffect } from "react";
import { getLocalStorageItem } from "../../helpers/localStorage";
import { IFile, SortDirection, SortType } from "../../types/file";

const FileList = () => {
  const { items, sortBy, sortDirection } = useSelector(useFileSelector);
  const dispatch = useDispatch();

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value as SortType));
  };

  const handleDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortDirection(e.target.value as SortDirection));
  };

  useEffect(() => {
    const files = getLocalStorageItem<IFile[] | null>({ key: "Files" });
    dispatch(setFiles(files ? files : []));
  }, []);

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
        <select value={sortDirection} onChange={handleDirectionChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
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
